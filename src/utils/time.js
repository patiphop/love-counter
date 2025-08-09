export function calculateElapsedTime(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);

  if (end < start) {
    return null;
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  let hours = end.getHours() - start.getHours();
  let minutes = end.getMinutes() - start.getMinutes();
  let seconds = end.getSeconds() - start.getSeconds();
  let milliseconds = end.getMilliseconds() - start.getMilliseconds();

  if (milliseconds < 0) {
    milliseconds += 1000;
    seconds -= 1;
  }
  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += previousMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days, hours, minutes, seconds, milliseconds };
}
