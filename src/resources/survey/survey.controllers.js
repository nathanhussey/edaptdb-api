import { Survey } from "../survey/survey.model";

export const postSurvey = async (req, res) => {
  const survey = new Survey({
    data: req.body.data,
  });
  try {
    const saveSurvey = await survey.save();
    res
      .status(200)
      .header("Access-Control-Allow-Origin", "*")
      .json({ message: "success" });
  } catch {
    res.send(err);
  }
};
