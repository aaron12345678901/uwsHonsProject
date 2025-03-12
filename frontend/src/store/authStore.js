import { createCookieStore } from 'react-auth-kit';

const authStore = createCookieStore({
  cookieName: "_auth",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

export default authStore;
