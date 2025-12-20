import express from "express";
import cors from "cors";
import announcementRoutes from "./routes/announcement.routes.js";
import { errorHandler } from "../../../shared/middleware/error.middleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", announcementRoutes);

app.use(errorHandler);

export default app;
