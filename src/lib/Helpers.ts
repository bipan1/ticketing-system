export const exclude = <T extends Record<string, unknown>>(
  target: T,
  keys: (keyof T)[],
): T => {
  for (const key of keys) {
    delete target[key];
  }
  return target;
};
