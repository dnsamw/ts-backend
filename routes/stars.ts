import { Router } from "express";
import { validateStar, Star } from "../models/star";
import Download from "../services/downloader";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await Star.find().sort({ _id: -1 });
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    // get the star object
    const result = await Star.findById(id);
    if (!result) return res.status(404).send("There no entry by given id");

    // extract image file name
    const dpName = result.dp;
    //try to delete image
    const isdeleted = await Download.deleteFile(dpName);

    // delete the star from db
    if (isdeleted !== true) res.status(404).send("Image could not be deleted!");
    const deletedResult = await Star.deleteOne({ _id: id });
    res.status(200).send(deletedResult);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Star.findById(id);
    if (!result) return res.status(404).send("There no entry by given id");
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
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
