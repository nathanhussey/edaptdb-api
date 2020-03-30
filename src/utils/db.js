import mongoose from "mongoose";

export const connect = () => {
  return mongoose.connect(`${process.env.DB_LOGIN}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
  });
};
