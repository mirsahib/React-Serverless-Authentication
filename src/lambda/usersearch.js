import { createClient } from "../helpers/db-helper";

export async function handler(event) {
    const dbClient = createClient();
    let errorStatusCode = 500;
    
   
    try {
        await dbClient.connect();
        const users = dbClient.usersCollection();
        var query = JSON.parse(event.body);
        console.log(query);
        var pokemon = "";
        try{
            pokemon= await users.find(query).toArray();
            console.log(pokemon);
        } catch(err){
            console.log("Hace bien la consulta salamin");
            return {
                statusCode: errorStatusCode,
                body: JSON.stringify({ status: errorStatusCode, msg: err.message }),
            };
        }
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data:pokemon}),
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