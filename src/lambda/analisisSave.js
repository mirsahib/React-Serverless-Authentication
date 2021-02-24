import { createClient } from "../helpers/db-helper";

export async function handler(event) {
  const dbClient = createClient();
  let errorStatusCode = 500;

  try {
    await dbClient.connect();
    const analisis = dbClient.usersCollection();

    const anal= JSON.parse(event.body);
  
    const pokemon = await analisis.insertOne(anal);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data:pokemon})
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
