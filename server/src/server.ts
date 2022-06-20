import express, {
  json,
  Express,
  Request,
  Response,
  NextFunction,
} from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import workoutRouter from "./routes/workouts";

dotenv.config();

// Create express app
const app: Express = express();

// Middleware
app.use(json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);

  next();
});

// Routes
app.use("/api/workouts", workoutRouter);

// Connect to db
mongoose
  .connect(process.env.MONG_URI!)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 4000 and connect to MongoDB");
    });
  })
  .catch((err) => {
    console.log(err);
  });
