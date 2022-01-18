import { NextFunction, Request, Response } from "express";

import type { TweetModelInterface } from "@/tweets/model";
import Tweet from "@/tweets/model";

const getAllTweets = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tweets: TweetModelInterface[] = await Tweet.find({});
    res.status(200).send(tweets);
  } catch (err) {
    next(err);
  }
};

const addTweet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorName, message, isFirstTweet, parentTweetId } = req.body;
    if (isFirstTweet) {
      let childTweet: TweetModelInterface = new Tweet({ authorName, message, childTweetsIds: null });
      childTweet = await childTweet.save();
      const tweets: TweetModelInterface[] = await Tweet.find({});
      return res.status(201).send(tweets);
    }
    let childTweet: TweetModelInterface = new Tweet({ authorName, message, childTweetsIds: [] });
    childTweet = await childTweet.save();
    if (parentTweetId) {
      let parentTweet: TweetModelInterface | null = await Tweet.findOne({ _id: parentTweetId });
      parentTweet!.childTweetsIds!.push(childTweet._id);
      await parentTweet!.save();
    }
    const tweets: TweetModelInterface[] = await Tweet.find({});
    res.status(201).send(tweets);
  } catch (err) {
    next(err);
  }
};

const deleteAllTweets = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Tweet.deleteMany({});
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

export { addTweet, deleteAllTweets, getAllTweets };
