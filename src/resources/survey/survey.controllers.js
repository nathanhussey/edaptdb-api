import { Survey } from "../survey/survey.model";

export const postSurvey = async (req, res) => {
  const survey = new Survey({
    data: req.body.data,
  });
  try {
    const saveSurvey = await survey.save();
    console.log(1);
    res.status(200).json({ message: "success" });
  } catch {
    res.send(err);
  }
};
