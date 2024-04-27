import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();

const client = new MongoClient("mongodb://localhost:27017/");

async function connectToDatabase() {
    await client.connect();
    console.log("Connected to MongoDB");
}

connectToDatabase();

const dbName = "LogSign";

app.use(bodyParser.json());
app.use(cors());

app.get("/", async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection("users");
    const finalRes = await collection.find({}).toArray();
    console.log(finalRes);
    res.json(finalRes);
});
app.post("/login", async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection("users");
    const finalRes = await collection.countDocuments(req.body);
    console.log(finalRes)
    res.json(finalRes);
});

app.post("/signUp", async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection("users");
    collection.insertOne(req.body);
    
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
