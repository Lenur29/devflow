import mongoose, { Mongoose } from 'mongoose';
import logger from './logger';
import "@/database";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    logger.info('Using existing MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'devflow',
    })
    .then((result) => {
      logger.info('New MongoDB connection established');
      return result;
    })
    .catch(error => {
      logger.error('Error establishing MongoDB connection');
      throw error;
    })
  }

  cached.conn = await cached.promise;

  return cached.conn;
};

export default dbConnect;
