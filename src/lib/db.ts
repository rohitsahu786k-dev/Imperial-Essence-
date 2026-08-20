import { MongoClient } from "mongodb";

let clientPromise: Promise<MongoClient> | null = null;

export async function getMongoClient(): Promise<MongoClient | null> {
  if (!process.env.DATABASE_URL) return null;

  if (!clientPromise) {
    const client = new MongoClient(process.env.DATABASE_URL as string);
    clientPromise = client.connect();
  }

  return clientPromise;
}
