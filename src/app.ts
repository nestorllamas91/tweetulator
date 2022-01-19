import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import next from "next";

import tweetRouter from "@/tweets/router";

(async (): Promise<void> => {
  try {
    const dev = process.env.NODE_ENV !== "production";
    const app = next({ dev });
    await app.prepare();
    const server = express();
    server.use(express.json());
    const router = express.Router();
    router.use("/tweets", tweetRouter);
    server.use("/api", router);
    server.use((err: any, req: Request, res: Response, next: NextFunction) => res.status(err.status).send(err));
    const handle = app.getRequestHandler();
    server.all("*", (req: Request, res: Response) => handle(req, res));
    // const mongoDbUri = "mongodb://db-service:27017/tweetulator";
    const mongoDbUri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ik09c.mongodb.net/tweetulator`;
    await mongoose.connect(mongoDbUri);
    const port = Number.parseInt(<string>process.env.PORT, 10) || 8080;
    server.listen(port, () => console.log(`App started on http://localhost:${port}`));
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
//
