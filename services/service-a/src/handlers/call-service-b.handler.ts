import { Request, Response } from "express";

export const callServiceBHandler = async ( _req: Request, res: Response) => 
    {
  const serviceBUrl = process.env.SERVICE_B_URL ||  "http://service-b-container:3001";

  const response = await fetch(`${serviceBUrl}/hello`);
  const data = await response.json();

  res.status(200).json({
    source: "service-a",
    target: "service-b",
    response: data,
  });
};