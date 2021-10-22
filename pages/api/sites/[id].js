import { connectToDatabase } from "../../../lib/db";
import { ObjectId } from "mongodb";

async function handler(req, res) {
  const data = req.body;
  const id = req.query.id;

  const { name, address, api } = data;

  if (req.method === "PUT") {
    const client = await connectToDatabase();

    const db = client.db();

    const result = await db.collection("sites").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { name: name, address: address, api: api },
      }
    );
    res.status(201).json(result);
    client.close();
  }

  if (req.method === "GET") {
    const client = await connectToDatabase();

    const db = client.db();

    const sites = await db
      .collection("sites")
      .findOne({ _id: new ObjectId(id) });

    res.status(201).json(sites);
    client.close();
  }

  if (req.method === "DELETE") {
    const client = await connectToDatabase();

    const db = client.db();

    const sites = await db
      .collection("sites")
      .findOneAndDelete({ _id: new ObjectId(id) });

    res.status(201).json(sites);
    client.close();
  }
}

export default handler;
