import { Router } from "express";
import { postSurvey } from "./survey.controllers";

const router = Router();

//survey

router.route("/").post(postSurvey);

export default router;
