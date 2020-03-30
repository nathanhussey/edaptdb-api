import mongoose from "mongoose";

export const connect = () => {
  return mongoose.connect(
    `${process.env.DB_LOGIN}`,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
    (err, db) => {
      if (db) {
        console.log("db connected");
      }
      if (err) {
        console.log("not connected");
      }
    }
  );
};
