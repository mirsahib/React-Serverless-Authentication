
import { getDefaultNormalizer } from "@testing-library/react";
import { createClient } from "../helpers/db-helper";

export async function handler(event) {
    const dbClient = createClient();
    let errorStatusCode = 500;
    console.log("entro");
   
    try {
        await dbClient.connect();
        const user = dbClient.usersCollection();
        const {id} = JSON.parse(event.body);
        //console.log(id);
       /* const existingUser = await user.findOneById({id});
        if (existingUser == null) {
          errorStatusCode = 401;
          throw new Error(`Invalid id`);
        }*/
        
        const pokemon = await user.findOne({_id}).toArray();
        console.log(pokemon);
        console.log("pokemon ven a mi");
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