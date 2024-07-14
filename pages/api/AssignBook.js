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
      const assignBookCollection = database.collection("AssignBook");
      const booksCollection = database.collection("Books");

      const { isbn } = req.body;

      // Validate input (ISBN)
      if (!isbn) {
        throw new Error("ISBN is required");
      }

      // Insert data into AssignBook collection
      const result = await assignBookCollection.insertOne({ isbn });
  
      // Update Books collection to decrement items count
      const book = await booksCollection.findOne({ isbn });
      if (!book) {
        throw new Error(`Book with ISBN ${isbn} not found`);
      }

      const updatedItems = book.items - 1;
      await booksCollection.updateOne({ isbn }, { $set: { items: String(updatedItems) } });

      res.status(200).json({ message: "Data saved successfully!" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
