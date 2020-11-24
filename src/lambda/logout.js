import { clearCookie } from "../helpers/jwt-helper";

export async function handler() {
  return {
    statusCode: 200,
    headers: {
      "Set-Cookie": clearCookie(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Logged out successfully" }),
  };
}
