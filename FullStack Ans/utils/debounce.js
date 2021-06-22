const debounce = (cb, timeout) => {
  let ref = null;

  return (...args) => {
    clearTimeout(ref);

    ref = setTimeout(() => {
      cb(...args);
    }, timeout);
  };
}

export default debounce;