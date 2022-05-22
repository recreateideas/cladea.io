/* Retrieve layout from local storage. */
export const getFromLS = (
  key: string
): string | Record<string, any> | number | undefined => {
  const item = window.localStorage.getItem(key) || "";
  if (item) {
    return JSON.parse(item);
  }
};

/* Save layout to local storage. */
export const saveToLS = (key: string, value: string | number | object) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const deleteFromLS = (key: string) =>
  window.localStorage.removeItem(key);
