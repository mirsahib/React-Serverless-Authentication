import cookie from "cookie";
import jwt from "jsonwebtoken";

export async function handler(event) {
  const cookies = event.headers.cookie && cookie.parse(event.headers.cookie);
  if (!cookies || !cookies.jwt) {
    return {
      statusCode: 401,
      body: JSON.stringify({
        msg: "There is no jwt cookie, so the request is unauthorized",
      }),
    };
  }

  try {
    const payload = jwt.verify(cookies.jwt, process.env.REACT_APP_JWT_TOKEN);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: payload.userId, email: payload.email }),
    };
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ msg: err.message }),
    };
  }
}
