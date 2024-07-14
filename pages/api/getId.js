// pages/api/getAllData.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const database = client.db('Library'); // Choose a name for your database
      const collection = database.collection('Books'); // Choose a name for your collection
      const { isbn } = req.body;

      if (!isbn) {
        return res.status(400).json({ message: 'ISBN is required' });
      }

      // Fetch the data from the collection
      const data = await collection.findOne({ isbn:isbn });

      if (data) {
        res.status(200).json(data._id);
      } else {
        res.status(404).json({ message: 'Data not found!' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong!', error: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}
