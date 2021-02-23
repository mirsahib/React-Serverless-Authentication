import { createClient } from "../helpers/db-helper";

export async function handler(event) {
    const dbClient = createClient();
    let errorStatusCode = 500;
    console.log("entro");
   
    try {
        await dbClient.connect();
        const users = dbClient.usersCollection();
        const query = JSON.parse(event.body);
        const filter = { email: query.email}
        const options = { upsert: true };
        const updateDoc = {
            $set: query.query,            
          };
        console.log(filter);
        console.log(updateDoc);
        var result = "";
        try{
            result= await users.updateOne(filter, updateDoc, options);
            console.log(
                `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
              );
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
            body: JSON.stringify({data:result}),
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