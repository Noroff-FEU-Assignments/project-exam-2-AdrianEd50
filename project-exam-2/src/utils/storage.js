const tokenKey = "token";

export const token = JSON.parse(localStorage.getItem("token"));

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }

  return JSON.parse(value);
}

export function clearStorage() {
  localStorage.clear();
}
