import { getDefaultNormalizer } from "@testing-library/react";
import { createClient } from "../helpers/db-helper";

export async function handler(event) {
    const dbClient = createClient();
    let errorStatusCode = 500;
    console.log("entro");
   
    try {
        await dbClient.connect();
        const users = dbClient.usersCollection();
        //const {email} = JSON.parse(event.body);
        let ema = JSON.parse(event.body);
        console.log(ema);
        var pokemon = "";
        try{
            console.log("por hacer la consulta");
            pokemon= await users.remove({email:ema});
            console.log(pokemon);
            console.log("pokemon eliminado");
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