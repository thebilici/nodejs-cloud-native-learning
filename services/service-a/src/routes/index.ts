import {Router} from "express";
import { healthHandler } from "../handlers/health.handler.js";
import { helloHandler } from "../handlers/hello.handler.js";
import { workHandler } from "../handlers/work.handler.js";
import { callServiceBHandler} from "../handlers/call-service-b.handler.js";

export const router = Router();

router.get("/call-service-b", callServiceBHandler);
router.get("/health", healthHandler);
router.get("/hello", helloHandler);
router.get("/work", workHandler);

