import { Router } from "express";

import * as tweetController from "@/tweets/controller";

const tweetRouter = Router();

tweetRouter.get("/", tweetController.getAllTweets);
tweetRouter.post("/", tweetController.addTweet);
tweetRouter.delete("/", tweetController.deleteAllTweets);

export default tweetRouter;
