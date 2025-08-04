const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb+srv://admin:JEW9oxG5VFA3KpXv@cluster0.bumbj.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "namasteNode";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const data = {
    name: "vanshika kumar",
    city: "mumbai",
    country: "usa",
  };

  const insertResult = await collection.insertMany([
    data
  ]);
  console.log("Inserted documents =>", insertResult);

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
