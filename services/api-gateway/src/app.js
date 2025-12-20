import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import dotenv from "dotenv";
import { errorHandler } from "../../../shared/middleware/error.middleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gram Panchayat API",
      version: "1.0.0",
      description: "API documentation for the Gram Panchayat web system"
    },
    servers: [
      {
        url: "/api", // Base path for proxied services
        description: "API Gateway"
      }
    ]
  },
  apis: ["./src/routes/*.js"] // Path to API routes for documentation
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Proxy routes
app.use("/api/auth", proxy(process.env.AUTH_SERVICE_URL));
app.use("/api/content", proxy(process.env.CONTENT_SERVICE_URL));
app.use("/api/staff", proxy(process.env.STAFF_SERVICE_URL));
app.use("/api/forms", proxy(process.env.FORMS_SERVICE_URL));

app.get("/", (req, res) => {
  res.send("API Gateway running");
});

app.use(errorHandler);

export default app;