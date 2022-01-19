import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Layout from "@/shared/layout/component";
import PageLink from "@/shared/page-link/component";
import type { ActionButtonProps, DiscussionPageProps, TweetModelType, TweetType } from "@/shared/types";
import Tweets from "@/tweets/component";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const tweetsResponse = await fetch(`http://localhost:${process.env.NEXT_PUBLIC_EXPRESS_PORT}/api/tweets/`, {
    method: "GET",
  });
  const tweets: TweetModelType[] = await tweetsResponse.json();
  const tweetsFixed: TweetType[] | null = tweets ? getTweetsFixed(tweets) : null;
  const statusCode = tweetsResponse.status;
  res.statusCode = statusCode;
  return { props: { tweets: tweetsFixed, statusCode } };
};

const DiscussionPage = ({ tweets, statusCode }: DiscussionPageProps): JSX.Element | null => {
  const [tweetsState, setTweetsState] = useState<TweetType[]>(tweets);
  const [tweetsTree, setTweetsTree] = useState<TweetType[]>([]);
  const [flagTweetsTreeDone, setFlagTweetsTreeDone] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (statusCode === 500) {
      router.push("/500");
      return;
    }
    getTweetsTree();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tweetsTree]);

  const deleteTweets = async () => {
    try {
      await fetch(`http://localhost:${process.env.NEXT_PUBLIC_EXPRESS_PORT}/api/tweets/`, { method: "DELETE" });
      updateTweetsTreeDOM([]);
    } catch (e: any) {
      router.push("/500");
    }
  };

  const updateTweetsTreeDOM = (tweets: TweetModelType[]) => {
    const tweetsFixed: TweetType[] = getTweetsFixed(tweets);
    setTweetsState(tweetsFixed);
    setTweetsTree([]);
  };

  const getTweetsTree = () => {
    for (let i = 0; i < tweetsState.length; i++) {
      if (!tweetsState[i].checked) {
        setTweetsTree((prevTweetsTree) => [...prevTweetsTree, getThread(tweetsState[i])]);
        updateTweetsState(tweetsState[i].document._id);
        break;
      }
    }
    checkTweetsTreeDone();
  };

  const getThread = (tweet: TweetType) => {
    tweet.document.childTweetsIds?.map((childTweetId) => {
      for (let i = 0; i < tweetsState.length; i++) {
        if (childTweetId === tweetsState[i].document._id) {
          tweet.childTweets?.push(tweetsState[i]);
          updateTweetsState(tweetsState[i].document._id);
          if (tweetsState[i].document.childTweetsIds!.length > 0) getThread(tweetsState[i]);
          break;
        }
      }
    });
    return tweet;
  };

  const updateTweetsState = (tweetId: string) => {
    setTweetsState((prevTweetsState) => {
      const newTweetsState = [...prevTweetsState];
      for (let i = 0; i < newTweetsState.length; i++) {
        if (tweetId === newTweetsState[i].document._id) {
          newTweetsState[i].checked = true;
          break;
        }
      }
      return newTweetsState;
    });
  };

  const checkTweetsTreeDone = () => {
    let tweetsTreeDone = true;
    for (let i = 0; i < tweetsState.length; i++) {
      if (!tweetsState[i].checked) tweetsTreeDone = false;
    }
    setFlagTweetsTreeDone(tweetsTreeDone);
  };

  if (!flagTweetsTreeDone) return null;

  return (
    <>
      <Head>
        <title>Tweetulator | Discussion</title>
      </Head>
      <Layout>
        <PageLink page="information" href="/info" text="INFORMATION" />
        {tweetsTree.length !== 0 && <ActionButton deleteTweets={deleteTweets} />}
        <Tweets tweetsTree={tweetsTree} updateTweetsTreeDOM={updateTweetsTreeDOM} />
      </Layout>
    </>
  );
};

const getTweetsFixed = (tweets: TweetModelType[]) => {
  return tweets.map((tweet) => ({
    document: tweet,
    childTweets: tweet.childTweetsIds ? [] : null,
    checked: false,
  }));
};

const ActionButton = ({ deleteTweets }: ActionButtonProps) => (
  <button
    onClick={deleteTweets}
    className="block mx-auto mt-4 rounded px-6 py-2 text-red-700 bg-red-200 hover:bg-red-300 mq3:mt-6"
  >
    Delete all tweets
  </button>
);

export default DiscussionPage;
