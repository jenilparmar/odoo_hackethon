import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const database = client.db("Library");
      const collection = database.collection("Books");
      const { isbn } = req.body;

      const book = await collection.findOne({ isbn: isbn });

      if (book) {
      
        res.json({ exists: true });
      } else {
      
        res.json({ exists: false });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
