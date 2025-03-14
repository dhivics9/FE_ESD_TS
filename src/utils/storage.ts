const PREFIX = 'EISDLAB';

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


export const setAuthLocalStorageData = (
  method: "remove" | "set",
  user?: string,
  refreshToken?: string,
  accessToken?: string,
) => {
  if (method === "set" && user && refreshToken && accessToken) {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem("user", user);
  }
  if (method == "remove") {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
  }
};
