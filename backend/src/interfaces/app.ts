import express from "express";
import diceRoutes from "./routes/diceRoutes";

const app = express();

// ミドルウェア設定
app.use(express.json());

// ルーティング
app.use("/api", diceRoutes);

export default app;
