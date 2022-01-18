import type { TweetModelType, TweetType } from "@/shared/types";

type TweetProps = {
  tweet: TweetType;
  updateTweetsTreeDOM: (tweets: TweetModelType[]) => void;
};

type HeaderProps = {
  tweet: TweetType;
  firstTweet: boolean;
  layout: number;
};

type MessageProps = {
  tweet: TweetType;
  firstTweet: boolean;
};

type ActionButtonProps = {
  openCommentForm: () => void;
};

export type { ActionButtonProps, HeaderProps, MessageProps, TweetProps };
