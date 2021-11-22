const DEFAULT_LOAD_TIMEOUT = 3000;
export const delayPromise = <P extends unknown>(
  func: () => Promise<P>,
  timeout: number = DEFAULT_LOAD_TIMEOUT
): (() => Promise<P>) => () =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  }).then(func);
