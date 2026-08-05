import {Router} from "express";
import { healthHandler } from "../handlers/health.handler.js";

export const router = Router();

router.get("/health", healthHandler);


