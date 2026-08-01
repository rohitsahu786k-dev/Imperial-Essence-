let clientPromise: Promise<unknown> | null = null;

export function getMongoClient() {
  if (!process.env.DATABASE_URL) return null;

  if (!clientPromise) {
    clientPromise = Function("return import('mongodb')")().then((mongodb: { MongoClient: new (url: string) => { connect: () => Promise<unknown> } }) =>
      new mongodb.MongoClient(process.env.DATABASE_URL as string).connect(),
    );
  }

  return clientPromise;
}
