import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.lrlxi.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    await client.close();

    res.status(201).json({ message: "Message inserted!" }); //Something was inserted successfully
  }
}

export default handler;
