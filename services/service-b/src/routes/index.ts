import { healthHandler } from "../handlers/health.handler";
import { helloHandler } from "../handlers/hello.handler";
import { Router } from "express";

const router = Router();

router.get("/health", healthHandler);
router.get("/hello", helloHandler);

export default router;
