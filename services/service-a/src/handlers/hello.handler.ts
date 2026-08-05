import { Request,Response } from "express";

export const helloHandler = (req: Request, res: Response) => {
    const name = process.env.SERVICE_NAME || "Service-a";
    res.status(200).json({
        message: `Hello, ${name}!`,
    });
}