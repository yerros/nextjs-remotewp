import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  console.log(data);

  const { name, address, api } = data;

  if (!name || !address || !api) {
    res.status(422).json({
      message: "Invalid input! - please check input value.",
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingAddress = await db
    .collection("sites")
    .findOne({ address: address });

  if (existingAddress) {
    res.status(422).json({ message: "Site address exists already!" });
    client.close();
    return;
  }

  const result = await db.collection("sites").insertOne({
    name: name,
    address: address,
    api: api,
  });

  res.status(201).json({ message: "Created site!" });
  client.close();
}

export default handler;
