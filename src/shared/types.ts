type Viewport = {
  width: number;
  height: number;
};

type TweetModelType = {
  _id: string;
  authorName: string;
  message: string;
  childTweetsIds: string[] | null;
  creationDate: string;
  updateDate: string;
  __v: number;
};

type TweetType = {
  document: TweetModelType;
  childTweets: TweetType[] | null;
  checked: boolean;
};

type DiscussionPageProps = {
  tweets: TweetType[];
  statusCode: number;
};

type ActionButtonProps = {
  deleteTweets: () => void;
};

export type { ActionButtonProps, DiscussionPageProps, TweetModelType, TweetType, Viewport };
