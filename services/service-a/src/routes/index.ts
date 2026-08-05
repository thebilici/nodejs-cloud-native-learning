import {Router} from "express";
import { healthHandler } from "../handlers/health.handler.js";
import { helloHandler } from "../handlers/hello.handler.js";

export const router = Router();

router.get("/health", healthHandler);
router.get("/hello", helloHandler);

