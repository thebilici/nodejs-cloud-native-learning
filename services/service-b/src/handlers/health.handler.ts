import { Request, Response } from "express";

export const healthHandler = (_req: Request, res: Response) => {
  const serviceName = process.env.SERVICE_NAME || "service-b";
  const appVersion = process.env.APP_VERSION || "1.0.0";

  res.status(200).json({
    status: "healthy",
    service: serviceName,
    version: appVersion,
    message: `${serviceName} is running`,
  });
};