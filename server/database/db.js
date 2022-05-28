import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.zlqgg.mongodb.net:27017,cluster0-shard-00-01.zlqgg.mongodb.net:27017,cluster0-shard-00-02.zlqgg.mongodb.net:27017/?ssl=true&replicaSet=atlas-3rsv20-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the databse", error);
  }
};

export default Connection;
