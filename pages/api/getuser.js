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
      const collection = database.collection("Users");
      const data= req.body;
      const dataq = await collection.insertOne(data);

      res.send("data saved successfully!!");
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  }
  else if(req.method==="GET"){
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const database = client.db("Library");
      const collection = database.collection("Users");

      const dataq = await collection.find({}).toArray();
      
      res.send(dataq);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong!" });
    } finally {
      await client.close();
    }
  }
   else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
