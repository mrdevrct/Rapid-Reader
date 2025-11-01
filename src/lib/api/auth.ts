import Cookies from "js-cookie";

const TOKEN_KEY = process.env.NEXT_TOKEN_SECRET_KEY || "jwt_token";

export function setToken(token: string) {
  Cookies.set(TOKEN_KEY, token, {
    expires: 7,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
}

export function getToken(): string | null {
  return Cookies.get(TOKEN_KEY) ?? null;
}

export function removeToken() {
  Cookies.remove(TOKEN_KEY);
}