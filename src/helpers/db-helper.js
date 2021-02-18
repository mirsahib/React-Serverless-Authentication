import { MongoClient } from "mongodb";

function createClient() {
  
  const client = new MongoClient(
    `mongodb+srv://inutiles2021:${process.env.REACT_APP_DB_PASSWORD}@cluster0.npkov.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.log(err);
      console.log("Database Connected");
    }
  );

  // We add a usersCollection function to the client object,
  // this way neither login or signup need to know the name
  // of the database or the users collection.
  client.usersCollection = function () {
    return this.db("test").collection("users");
  };

  return client;
}

export { createClient };
