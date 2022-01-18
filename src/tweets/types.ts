import type { TweetModelType, TweetType } from "@/shared/types";

type TweetsProps = {
  tweetsTree: TweetType[];
  updateTweetsTreeDOM: (tweets: TweetModelType[]) => void;
};

export type { TweetsProps };
