import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  // if (req.method !== 'POST') {
  //   return;
  // }

  const client = await connectToDatabase();

  const db = client.db();

  const count = await db.collection("users").count();
  const users = await db.collection("users").findOne();

  res.status(201).json({ total: count, user: [users] });
  client.close();
}

export default handler;
