export const debounce = (callback: (e: Event) => void, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>;
  return (event: Event) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};
