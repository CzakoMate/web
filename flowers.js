import express from "express";
import { dbQuerry, dbRun } from "../database.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const flowers = await dbQuerry("SELECT * FROM flowers");
    res.status(200).json(flowers);
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const [flower] = await dbQuerry("SELECT * FROM flowers WHERE id=?;", [
      req.params.id,
    ]);
    if (!flower) return res.status(404).json({ message: "Flower not found" });
    res.status(200).json(flower);
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const result = await dbRun(
      "INSERT INTO flowers (name, description, stock, price, ImgUrl, cathegory) VALUES(?,?,?,?,?,?);",
      [
        req.body.name,
        req.body.description,
        req.body.stock,
        req.body.ImgUrl,
        req.body.cathegory,
      ]
    );
    res.status(201).json({ id: result.lastID, ...req.body });
  } catch (err) {
    next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const [flower] = await dbQuerry("SELECT * FROM flowers WHERE id=?", [
      req.params.id,
    ]);
    if (!flower) return res.status(404).json({ message: "Flower not found" });
    await dbRun(
      "UPDATE flowers SET name=?, description=?, stock=?, price=?, ImgUrl=?, cathegory=? WHERE id=?;",
      [
        req.body.name || flower.name,
        req.body.description || flower.description,
        req.body.stock || flower.stock,
        req.body.price || flower.price,
        req.body.ImgUrl || flower.ImgUrl,
        req.body.cathegory || flower.cathegory,
        req.params.id,
      ]
    );
    res.status(200).json({ id: req.params.id, ...req.body });
  } catch (err) {
    next(err);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const [flower] = await dbQuerry("SELECT * FROM flowers WHERE id=?;", [
      req.params.id,
    ]);
    if (!flower) return res.status(404).json({ message: "Flower not found" });
    await dbRun("DELETE FROM flowers WHERE id=?", [req.params.id]);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
export default router;
