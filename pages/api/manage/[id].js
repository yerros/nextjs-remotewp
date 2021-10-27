import { connectToDatabase } from "../../../lib/db";
import { ObjectId } from "mongodb";
import axios from "axios";

async function handler(req, res) {
  const data = req.body;
  const { id, wp_id } = req.query;
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
    // connect to database
    const client = await connectToDatabase();
    const db = client.db();
    // search details site
    const sites = await db
      .collection("sites")
      .findOne({ _id: new ObjectId(id) });
    client.close();
    const rest = "/wp-json/wp/v2/posts/";
    if (wp_id) {
      //const result = await axios.get(sites.address + rest);
      const result = await axios.get(sites.address + rest + wp_id);
      return res.status(201).json(result.data);
    } else {
      const result = await axios.get(sites.address + rest);
      return res.status(201).json(result.data);
    }
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
