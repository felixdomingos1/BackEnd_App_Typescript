import express from "express";
import "express-async-errors";
import * as dotenv from "dotenv";
import cors from "cors";

import { routes } from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errorHandler);

export { app };
