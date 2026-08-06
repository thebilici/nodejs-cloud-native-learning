import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3001;
const SERVİCE_NAME = process.env.SERVICE_NAME || "service-b";

app.listen(PORT,()=>
{
    console.log(`${SERVİCE_NAME} is running on port ${PORT}`);
})