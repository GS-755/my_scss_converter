const delay = (miliSeconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, miliSeconds));
};

export { delay };
