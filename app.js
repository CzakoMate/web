import express from "express";
import cors from "cors";
import { initializedb } from "./database.js";
import flowersRouter from "./routes/flowers.js";
import swaggerUI from "swagger-ui-express";
import { readFile } from "fs/promises";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/flowers", flowersRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});
const swaggerDocument = JSON.parse(
  await readFile(new URL("./swagger-output.json", import.meta.url))
);
const startServer = async () => {
  await initializedb();
  app.listen(3000, () => {
    console.log("Server listens on port 3000");
  });
};
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
startServer();
