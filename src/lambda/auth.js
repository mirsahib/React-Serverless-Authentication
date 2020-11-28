import cookie from "cookie";
import jwt from "jsonwebtoken";

export async function handler(event) {
  const cookies = event.headers.cookie && cookie.parse(event.headers.cookie);
  if (!cookies || !cookies.jwt) {
    return {
      statusCode: 401,
      body: JSON.stringify({
        auth: false,
        msg: "Missing Authorization token",
      }),
    };
  }

  try {
    const verified = jwt.verify(cookies.jwt, process.env.REACT_APP_JWT_TOKEN);
    if (!verified) {
      return {
        statusCode: 401,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          auth: false,
          msg: "Invalid Authorization token",
        }),
      };
    } else {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ auth: true }),
      };
    }
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ msg: err.message }),
    };
  }
}
