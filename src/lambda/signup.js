import bcrypt from "bcryptjs";
import { createClient } from "../helpers/db-helper";
import { createJwtCookie } from "../helpers/jwt-helper";

export async function handler(event) {
  const dbClient = createClient();
  let errorStatusCode = 500;

  try {
    await dbClient.connect();
    const users = dbClient.usersCollection();
    //console.log("queryStringParameters", event.queryStringParameters);

    const { email, password } = JSON.parse(event.body);

    const existingUser = await users.findOne({ email });

    if (existingUser !== null) {
      errorStatusCode = 409;
      throw new Error(`A user already exists with the email: ${email}`);
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const { insertedId } = await users.insertOne({
      email,
      password: passwordHash,
    });

    return {
      statusCode: 200,
      headers: {
        "Set-Cookie": createJwtCookie(insertedId, email),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: insertedId, email }),
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
