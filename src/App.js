import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [theme, setTheme] = useState('system'); // 'light' | 'dark' | 'system'

  useEffect(() => {
    const saved = localStorage.getItem('theme');        // อาจเป็น null
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const preferred = mq.matches ? 'dark' : 'light';
    const initial = saved || 'system';
    const apply = initial === 'system' ? preferred : initial;

    document.documentElement.setAttribute('data-theme', apply);
    setTheme(initial);

    // อัปเดตอัตโนมัติเมื่อระบบเปลี่ยนธีม (ถ้าอยู่โหมด Auto)
    const listener = (e) => {
      const current = localStorage.getItem('theme') || 'system';
      if (current === 'system') {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener?.('change', listener);
    return () => mq.removeEventListener?.('change', listener);
  }, []);

  const cycleTheme = () => {
    const next =
      theme === 'light' ? 'dark' :
      theme === 'dark'  ? 'system' :
                          'light';

    setTheme(next);
    localStorage.setItem('theme', next);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = next === 'system' ? (mq.matches ? 'dark' : 'light') : next;
    document.documentElement.setAttribute('data-theme', apply);
  };

  const label =
    theme === 'light' ? 'Light' :
    theme === 'dark'  ? 'Dark'  : 'Auto';

  return (
    <div className="App">
      <button className="theme-toggle" onClick={cycleTheme} aria-label="Toggle theme">
        <span className="dot" />
        {label}
      </button>

      <h1 className="title">Our Love Story</h1>
      <Counter />
    </div>
  );
}

export default App;
