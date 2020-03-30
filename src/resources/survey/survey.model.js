import mongoose from "mongoose";
import bcrypt from "bcrypt";

const surveySchema = mongoose.Schema({
  data: [
    {
      _id: false,
      id: false,
      question: String,
      questionType: String,
      answers: [
        {
          _id: false,
          id: String,
          answer: String,
          checked: Boolean,
        },
      ],
    },
  ],
});

export const Survey = mongoose.model("survey", surveySchema);
