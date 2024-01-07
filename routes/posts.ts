import { Router } from "express";
import dummyPosts, { Post } from "../data/post_data";

const router = Router();

router.get("/", async (req, res) => {
  res.status(200).send(dummyPosts);
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const post = dummyPosts.filter((p) => p.id === parseInt(id));
  res.status(200).send(post);
});
router.post("/", async (req, res) => {
  const post = req.body;
  res.status(201).send(post);
});
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const post = dummyPosts.filter((p) => p.id === parseInt(id));

  res.status(201).send(req.body);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const post = dummyPosts.filter((p) => p.id === parseInt(id));
  res.status(201).send(post);
});

export default router;
