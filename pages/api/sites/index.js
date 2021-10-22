import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  // if (req.method !== 'POST') {
  //   return;
  // }

  const client = await connectToDatabase();

  const db = client.db();

  const count = await db.collection("sites").count();
  const sites = await db.collection("sites").find({}).toArray();

  res.status(201).json({ total: count, sites: sites, success: true });
  client.close();
}

export default handler;
