import { createClient } from "../helpers/db-helper";

export async function handler(event) {
  const dbClient = createClient();
  let errorStatusCode = 500;
    console.log("entroo");
  try {
    await dbClient.connect();
    const analisis = dbClient.analisisCollection();

    const anal= JSON.parse(event.body);
  
     await analisis.insertOne(anal);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: "Cargado con exito"
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
