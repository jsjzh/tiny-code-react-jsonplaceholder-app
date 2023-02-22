export const sleepAsync = (timer: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, timer));

export const sleepSync = (timer: number) => {
  const current = Date.now();
  while (Date.now() - current < timer) {}
};
