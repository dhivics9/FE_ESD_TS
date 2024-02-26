const PREFIX = 'ESDLAB';

const SIDEBAR = `${PREFIX}_SIDEBAR`;
const USER = `${PREFIX}_USER`;

export function clearLocalStorage(): void {
  localStorage.removeItem(SIDEBAR);
  localStorage.removeItem(USER);
}

export const getUser = () => {
  const savedUser = localStorage.getItem(USER);
  if (savedUser == null) {
    return null
  }

  try {
    return JSON.parse(atob(savedUser));
  } catch {
    return null
  }
};

export function saveUser(user: User): void {
  const serializeUser = JSON.stringify(user);
  localStorage.setItem(USER, btoa(serializeUser));
}