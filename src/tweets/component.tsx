import PostForm from "@/forms/post/component";
import type { TweetType } from "@/shared/types";
import Tweet from "@/tweets/tweet/component";
import type { TweetsProps } from "@/tweets/types";

const Tweets = ({ tweetsTree, updateTweetsTreeDOM }: TweetsProps): JSX.Element => {
  const renderTweets = (tweets: TweetType[]) => {
    return tweets.map((tweet) => (
      <div key={tweet.document._id} className="mt-4 ml-6 mq3:mt-6 mq3:ml-10">
        <Tweet tweet={tweet} updateTweetsTreeDOM={updateTweetsTreeDOM} />
        {tweet.childTweets && <div className="border-l-2 border-slate-200">{renderTweets(tweet.childTweets)}</div>}
      </div>
    ));
  };
  return tweetsTree.length === 0 ? (
    <PostForm updateTweetsTreeDOM={updateTweetsTreeDOM} />
  ) : (
    <div className="-ml-6 mq3:-ml-10">{renderTweets(tweetsTree)}</div>
  );
};

export default Tweets;
