import { Request, Response } from "express";

export const helloHandler = (_req: Request, res: Response) => {
  const serviceName = process.env.SERVICE_NAME || "service-b";

  res.status(200).json({
    service: serviceName,
    message: `Hello from ${serviceName}`,
  });
};