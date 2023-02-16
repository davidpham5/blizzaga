export function getCookie(cookie) {
  const name = `${cookie}=`;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return cookie;
}
