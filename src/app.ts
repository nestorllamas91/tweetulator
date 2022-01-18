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
    const mongodbUri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOSTNAME}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}?authSource=admin`;
    await mongoose.connect(mongodbUri);
    const port = Number.parseInt(<string>process.env.NEXT_PUBLIC_PORT, 10) || 8080;
    server.listen(port, () => console.log(`App started on http://localhost:${process.env.NEXT_PUBLIC_PORT}`));
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
