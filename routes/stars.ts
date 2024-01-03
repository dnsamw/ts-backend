import { Router } from "express";
import { validateStar, Star } from "../models/star";
import Download from "../services/downloader";

const router = Router();

router.get("/", async (req, res) => {
  res.status(200).send("Welcom te stars router!!");
});

router.post("/", async (req, res) => {
  // check if the user inputs are valid
  const { error } = validateStar(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    // try to download the dp
    const localImgUrl = await Download.file(req.body.dp);
    if (!localImgUrl)
      return res
        .status(400)
        .send("Dp Download Failed please try a different image link");

    const newStar: typeof Star = {
      ...req.body,
      dp: `/${localImgUrl}`,
    };

    //try saving to db
    const star = new Star(newStar);
    const result = await star.save();

    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
