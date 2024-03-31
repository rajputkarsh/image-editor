export const randomIntFromInterval = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
