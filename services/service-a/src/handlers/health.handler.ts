import { Request,Response } from "express";

export const healthHandler = (_req: Request, res: Response) => {
    const SERVICE_NAME = process.env.SERVICE_NAME || "service-a";
    const APP_VERSION = process.env.APP_VERSION || "1.0.0";
    res.status(200).json({
        status: "healthy",
        service: SERVICE_NAME,
        version: APP_VERSION,
        message: `${SERVICE_NAME} is running`,
    });
}

