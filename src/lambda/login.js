import bcrypt from "bcryptjs";
import { createClient } from "../helpers/db-helper";
import { createJwtCookie } from "../helpers/jwt-helper";

export async function handler(event) {
  const dbClient = createClient();
  let errorStatusCode = 500;

  try {
    await dbClient.connect();
    const users = dbClient.usersCollection();
    console.log("queryStringParameters", event.queryStringParameters);

    const { email, password } = event.queryStringParameters;

    const existingUser = await users.findOne({ email });

    if (existingUser == null) {
      errorStatusCode = 401;
      throw new Error(`Invalid username and password`);
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      errorStatusCode = 401;
      throw new Error(`Password do not match`);
    }
    const userId = existingUser._id;
    const jwtCookie = createJwtCookie(userId, email);

    return {
      statusCode: 200,
      headers: {
        "Set-Cookie": jwtCookie,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId, email, cookie: jwtCookie }),
    };
  } catch (err) {
    return {
      statusCode: errorStatusCode,
      body: JSON.stringify({ status: errorStatusCode, msg: err.message }),
    };
  } finally {
    dbClient.close();
  }
}
