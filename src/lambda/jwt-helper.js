import jwt from "jsonwebtoken";
import cookie from "cookie";

function createJwtCookie(userId, email) {
  const token = jwt.sign({ userId, email }, process.env.REACT_APP_JWT_TOKEN, {
    expiresIn: "10 days",
  });
  const jwtCookie = cookie.serialize("jwt", token, {
    secure: process.env.NETLIFY_DEV !== "true",
    httpOnly: true,
    path: "/",
  });
  return jwtCookie;
}

export { createJwtCookie };
