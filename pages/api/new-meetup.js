import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://sneh56:Sneh%405683@atlascluster.a5immtx.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(JSON.parse(data));

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
