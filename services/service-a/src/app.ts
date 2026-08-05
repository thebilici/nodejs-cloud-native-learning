import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const SERVICE_NAME = process.env.SERVICE_NAME || "service-a";
const APP_VERSION = process.env.APP_VERSION || "1.0.0";

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "healthy",
    service: SERVICE_NAME,
    version: APP_VERSION,
    message: `${SERVICE_NAME} is running`,
  });
});

export default app;