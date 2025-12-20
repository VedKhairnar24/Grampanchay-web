import express from "express";
import cors from "cors";
import formsRoutes from "./routes/forms.routes.js";
import { errorHandler } from "../../../shared/middleware/error.middleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", formsRoutes);

app.use(errorHandler);

export default app;
