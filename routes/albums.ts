import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  res.status(200).send("Get All");
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  res.status(200).send(id);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.status(200).send(id);
});

router.post("/", async (req, res) => {
  res.status(201).send(req.body);
});

export default router;
