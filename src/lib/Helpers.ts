export const exclude = (target: any, keys: string[]) => {
  for (let key of keys) {
    delete target[key];
  }
  return target;
};
