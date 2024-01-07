import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  res.status(200).send("POST ROUTE");
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.status(200).send("POST ROUTE");
});
router.post("/", async (req, res) => {
  res.status(201).send("POST ROUTE");
});
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  res.status(201).send("POST ROUTE");
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  res.status(201).send("POST ROUTE");
});

export default router;
