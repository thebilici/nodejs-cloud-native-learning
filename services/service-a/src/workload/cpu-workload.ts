export const runCpuWork = (durationMs: number): number => {
  const endTime = Date.now() + durationMs;
  let iterations = 0;

  while (Date.now() < endTime) {
    Math.sqrt(iterations);
    iterations++;
  }

  return iterations;
};