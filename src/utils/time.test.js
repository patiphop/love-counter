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

  it('returns zero for same start and end time', () => {
    const start = new Date('2022-05-15T12:34:56.789Z').getTime();
    const end = new Date('2022-05-15T12:34:56.789Z').getTime();
    const result = calculateElapsedTime(start, end);
    expect(result).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  });

  it('calculates leap year correctly (Feb 29)', () => {
    const start = new Date('2020-02-29T00:00:00Z').getTime();
    const end = new Date('2021-02-28T00:00:00Z').getTime();
    const result = calculateElapsedTime(start, end);
    expect(result.years).toBe(0);
    expect(result.months).toBe(11);
    expect(result.days).toBe(30); // depending on your function's handling
  });

  it('calculates across different timezones', () => {
    const start = new Date('2020-06-01T12:00:00+09:00').getTime();
    const end = new Date('2020-06-02T12:00:00+09:00').getTime();
    const result = calculateElapsedTime(start, end);
    expect(result.days).toBe(1);
  });

  it('handles only milliseconds difference', () => {
    const start = new Date('2020-01-01T00:00:00.000Z').getTime();
    const end = new Date('2020-01-01T00:00:00.500Z').getTime();
    const result = calculateElapsedTime(start, end);
    expect(result.milliseconds).toBe(500);
  });

  it('handles only hours/minutes/seconds difference', () => {
    const start = new Date('2020-01-01T00:00:00Z').getTime();
    const end = new Date('2020-01-01T05:30:15.250Z').getTime();
    const result = calculateElapsedTime(start, end);
    expect(result).toMatchObject({
      years: 0,
      months: 0,
      days: 0,
      hours: 5,
      minutes: 30,
      seconds: 15,
      milliseconds: 250,
    });
  });

  it('handles multi-year multi-month multi-day difference', () => {
    const start = new Date('2018-03-15T10:20:30.400Z').getTime();
    const end = new Date('2022-07-20T15:25:35.900Z').getTime();
    const result = calculateElapsedTime(start, end);
    expect(result.years).toBeGreaterThanOrEqual(4);
    expect(result.months).toBeGreaterThanOrEqual(4);
    expect(result.days).toBeGreaterThanOrEqual(5);
  });
});
