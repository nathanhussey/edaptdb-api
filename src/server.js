import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { connect } from "./utils/db";
import surveyRouter from "./resources/survey/survey.route";

require("dotenv").config();

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.options("*", cors());
console.log(3);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("app is running");
});
console.log(2);
app.use("/survey", surveyRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(process.env.PORT || 3001, () => {
      console.log(`REST API on http://localhost:3001`);
    });
  } catch (e) {
    console.error(e);
  }
};
