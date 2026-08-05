import {Request,Response} from "express";
import { runCpuWork } from "../workload/cpu-workload";

export const workHandler=(req:Request,res:Response)=>
{
    const durationMs = 100;
    const iterations = runCpuWork(durationMs);

    res.status(200).json(
        {
        message: "CPU workload completed",
        durationMs,
        iterations,
        }
    )
}