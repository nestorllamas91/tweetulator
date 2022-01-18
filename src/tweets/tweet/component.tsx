import { useEffect, useState } from "react";

import CommentForm from "@/forms/comment/component";
import AnonymousProfilePhotoIcon from "@/shared/icons/anonymous-profile-photo/component";
import type { Viewport } from "@/shared/types";
import { getDateFormatted, getLayout } from "@/shared/utils";
import type { ActionButtonProps, HeaderProps, MessageProps, TweetProps } from "@/tweets/tweet/types";

const Tweet = ({ tweet, updateTweetsTreeDOM }: TweetProps): JSX.Element | null => {
  const [viewport, setViewport] = useState<Viewport>({ width: 0, height: 0 });
  const [flagRenderCommentForm, setFlagRenderCommentForm] = useState(false);

  useEffect(() => {
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const updateViewport = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
  const openCommentForm = () => setFlagRenderCommentForm(true);
  const closeCommentForm = () => setFlagRenderCommentForm(false);

  const layout = getLayout(viewport.width, viewport.height);
  const firstTweet = tweet.childTweets ? false : true;
  const borderColor = firstTweet ? "border-blue-200" : "border-slate-200";
  const backgroundColor = firstTweet ? "bg-blue-50" : "bg-slate-50";

  return (
    <>
      <div
        className={`flex items-center border-l-8 border-r-2 border-y-2 ${borderColor} rounded-md p-3 ${backgroundColor} mq2:p-4 mq3:p-5`}
      >
        {layout !== 1 && <ProfileImage />}
        <div className="flex flex-col grow mq1:ml-3 mq2:ml-4 mq3:ml-6">
          <Header tweet={tweet} firstTweet={firstTweet} layout={layout} />
          <Message tweet={tweet} firstTweet={firstTweet} />
          <ActionButton openCommentForm={openCommentForm} />
        </div>
      </div>
      {flagRenderCommentForm && (
        <CommentForm
          parentTweet={tweet}
          updateTweetsTreeDOM={updateTweetsTreeDOM}
          closeCommentForm={closeCommentForm}
        />
      )}
    </>
  );
};

const ProfileImage = () => <AnonymousProfilePhotoIcon className="shrink-0 fill-slate-700 mq1:h-20 mq2:h-20 mq3:h-28" />;

const Header = ({ tweet, firstTweet, layout }: HeaderProps) => {
  const getAuthorAction = (firstTweet: boolean, layout: number) => {
    if (firstTweet) {
      if (layout === 1 || layout === 3) {
        return "posted";
      } else {
        return "posted a tweet";
      }
    } else {
      if (layout === 1 || layout === 3) {
        return "commented";
      } else {
        return "commented on a tweet";
      }
    }
  };

  const authorAction = getAuthorAction(firstTweet, layout);
  const { year, month, day, hour, minute } = getDateFormatted(tweet.document.creationDate);
  const backgroundColor = firstTweet ? "bg-blue-100" : "bg-slate-100";

  return (
    <div className={`flex justify-between items-center rounded-md px-2 py-1 ${backgroundColor} mq2:px-3 mq3:px-3`}>
      <div className="flex items-center flex-none">
        <span className="font-bold">{tweet.document.authorName}</span>
        &nbsp;
        <span className="font-bold text-slate-500">{authorAction}</span>
      </div>
      <span className="ml-4 text-slate-500 mq2:ml-10 mq3:ml-10">{`${month} ${day}, ${year} - ${hour}:${minute}`}</span>
    </div>
  );
};

const Message = ({ tweet, firstTweet }: MessageProps) => (
  <div className="mt-2">
    {firstTweet ? (
      <span className="text-blue-500">{tweet.document.message}</span>
    ) : (
      <>
        <span className="text-red-500">{tweet.document.message[0]}</span>
        <span className="text-blue-500">{tweet.document.message.slice(1)}</span>
      </>
    )}
  </div>
);

const ActionButton = ({ openCommentForm }: ActionButtonProps) => (
  <button
    onClick={openCommentForm}
    className="self-end mt-5 rounded px-2.5 py-1 text-blue-700 bg-blue-200 hover:bg-blue-300"
  >
    Reply
  </button>
);

export default Tweet;
