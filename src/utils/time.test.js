import { calculateElapsedTime } from './time';

describe('calculateElapsedTime', () => {
  it('calculates one day difference', () => {
    const start = new Date('2020-01-01T00:00:00Z').getTime();
    const end = new Date('2020-01-02T00:00:00Z').getTime();
    const result = calculateElapsedTime(start, end);
    expect(result).toMatchObject({ years: 0, months: 0, days: 1 });
  });

  it('calculates one month difference', () => {
    const start = new Date('2020-01-01T00:00:00Z').getTime();
    const end = new Date('2020-02-01T00:00:00Z').getTime();
    const result = calculateElapsedTime(start, end);
    expect(result).toMatchObject({ years: 0, months: 1, days: 0 });
  });

  it('calculates one year difference', () => {
    const start = new Date('2020-01-01T00:00:00Z').getTime();
    const end = new Date('2021-01-01T00:00:00Z').getTime();
    const result = calculateElapsedTime(start, end);
    expect(result).toMatchObject({ years: 1, months: 0, days: 0 });
  });

  it('calculates a complex difference accurately', () => {
    const start = new Date('2020-01-01T01:02:03.004Z').getTime();
    const end = new Date('2021-02-03T04:05:06.007Z').getTime();
    const result = calculateElapsedTime(start, end);
    expect(result).toEqual({
      years: 1,
      months: 1,
      days: 2,
      hours: 3,
      minutes: 3,
      seconds: 3,
      milliseconds: 3,
    });
  });
});
