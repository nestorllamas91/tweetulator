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
    await mongoose.connect(`mongodb+srv://root:4h7*$5D&8j4y@cluster0.ik09c.mongodb.net/tweetulator`);
    // await mongoose.connect(`mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`);
    const port = Number.parseInt(<string>process.env.NEXT_PUBLIC_EXPRESS_PORT, 10) || 8080;
    server.listen(port, () => console.log(`App started on http://localhost:${process.env.NEXT_PUBLIC_EXPRESS_PORT}`));
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
//
