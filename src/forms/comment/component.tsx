import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import type {
  ActionButtonsProps,
  AuthorNameProps,
  CommentFormProps,
  HeaderProps,
  Inputs,
  MathOperatorProps,
  NumberProps,
} from "@/forms/comment/types";
import ReplyIcon from "@/shared/icons/reply/component";
import RightArrowIcon from "@/shared/icons/right-arrow/component";
import type { Viewport } from "@/shared/types";
import { getLayout } from "@/shared/utils";

const CommentForm = ({ parentTweet, updateTweetsTreeDOM, closeCommentForm }: CommentFormProps): JSX.Element => {
  const [viewport, setViewport] = useState<Viewport>({ width: 0, height: 0 });
  const [inputs, setInputs] = useState<Inputs>({ authorName: "", mathOperator: "", number: "" });
  const router = useRouter();

  useEffect(() => {
    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("keydown", handleEscapeKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateViewport = () => {
    setViewport({ width: window.innerWidth, height: window.innerHeight });
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") closeCommentForm();
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const url =
        process.env.NODE_ENV === "production"
          ? "https://tweetulator-nestorllamas91.herokuapp.com/api/tweets/"
          : "http://localhost:8080/api/tweets/";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          authorName: inputs.authorName,
          message: `${inputs.mathOperator} ${parseInt(inputs.number, 10)}`,
          isFirstTweet: false,
          parentTweetId: parentTweet.childTweets ? parentTweet.document._id : null,
        }),
      });
      const tweets = await res.json();
      updateTweetsTreeDOM(tweets);
    } catch (e: any) {
      router.push("/500");
    }
  };

  const updateInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prevInputs) => ({ ...prevInputs, [e.target.name]: e.target.value }));
  };

  const layout = getLayout(viewport.width, viewport.height);

  return (
    <div className="mt-4 border-2 rounded-lg p-3 border-amber-200 bg-amber-50 mq2:p-4 mq3:mt-6 mq3:p-5">
      <Header authorName={parentTweet.document.authorName} layout={layout} />
      <form onSubmit={submitForm} className="flex flex-col mt-3 mq2:mt-5 mq3:mt-6">
        <div className="flex flex-col space-y-2 mq1:space-y-3 mq2:space-y-3 mq3:space-y-3">
          <AuthorName authorName={inputs.authorName} updateInputs={updateInputs} />
          <MathOperator mathOperator={inputs.mathOperator} updateInputs={updateInputs} />
          <Number number={inputs.number} updateInputs={updateInputs} />
        </div>
        <ActionButtons closeCommentForm={closeCommentForm} />
      </form>
    </div>
  );
};

const Header = ({ authorName, layout }: HeaderProps) => {
  return layout === 1 ? (
    <>
      <div className="flex flex-col">
        <div className="flex items-center">
          <ReplyIcon className="w-3 fill-slate-600" />
          <span className="ml-1 text-slate-500">{`replying to ${authorName}...`}</span>
        </div>
        <span className="mt-4 font-bold">Write your comment</span>
      </div>
      <hr className="mt-2 border-slate-400" />
    </>
  ) : (
    <>
      <div className="flex justify-between">
        <span className="font-bold">Write your comment</span>
        <div className="flex items-center">
          <ReplyIcon className="w-3 fill-slate-600" />
          <span className="ml-1 text-slate-500">{`replying to ${authorName}...`}</span>
        </div>
      </div>
      <hr className="mt-2 border-slate-400" />
    </>
  );
};

const AuthorName = ({ authorName, updateInputs }: AuthorNameProps): JSX.Element => (
  <label
    htmlFor="author-name"
    className="flex flex-col items-start mq1:flex-row mq1:items-center mq2:flex-row mq2:items-center mq3:flex-row mq3:items-center"
  >
    <div className="flex items-center">
      <RightArrowIcon className="w-6 fill-green-500" />
      <span className="ml-2">Enter your name:</span>
    </div>
    <input
      id="author-name"
      name="authorName"
      type="text"
      required
      value={authorName}
      onChange={updateInputs}
      className="border-2 rounded-md border-amber-100 py-1 px-2 mq1:ml-4 mq2:ml-4 mq3:ml-4"
    />
  </label>
);

const MathOperator = ({ mathOperator, updateInputs }: MathOperatorProps) => (
  <div className="flex flex-col items-start mq1:flex-row mq1:items-center mq2:flex-row mq2:items-center mq3:flex-row mq3:items-center">
    <div className="flex items-center">
      <RightArrowIcon className="w-6 fill-green-500" />
      <span className="ml-2">Select a math operator:</span>
    </div>
    <div className="flex space-x-4 border-2 rounded-md py-1 px-2 border-amber-100 bg-white mq1:ml-4 mq2:ml-4 mq3:ml-4">
      <label htmlFor="sum" className="flex flex-col items-center">
        <span className="mb-2 leading-3">+</span>
        <input
          id="sum"
          name="mathOperator"
          type="radio"
          required
          value="+"
          checked={mathOperator === "+"}
          onChange={updateInputs}
        />
      </label>
      <label htmlFor="substraction" className="flex flex-col items-center">
        <span className="mb-2 leading-3">-</span>
        <input
          id="substraction"
          name="mathOperator"
          type="radio"
          required
          value="-"
          checked={mathOperator === "-"}
          onChange={updateInputs}
        />
      </label>
      <label htmlFor="multiplication" className="flex flex-col items-center">
        <span className="mb-2 leading-3">×</span>
        <input
          id="multiplication"
          name="mathOperator"
          type="radio"
          required
          value="×"
          checked={mathOperator === "×"}
          onChange={updateInputs}
        />
      </label>
      <label htmlFor="division" className="flex flex-col items-center">
        <span className="mb-2 leading-3">÷</span>
        <input
          id="division"
          name="mathOperator"
          type="radio"
          required
          value="÷"
          checked={mathOperator === "÷"}
          onChange={updateInputs}
        />
      </label>
    </div>
  </div>
);

const Number = ({ number, updateInputs }: NumberProps): JSX.Element => (
  <label
    htmlFor="number"
    className="flex flex-col items-start mq1:flex-row mq1:items-center mq2:flex-row mq2:items-center mq3:flex-row mq3:items-center"
  >
    <div className="flex items-center">
      <RightArrowIcon className="w-6 fill-green-500" />
      <span className="ml-2">Enter a number:</span>
    </div>
    <input
      id="number"
      name="number"
      type="number"
      required
      value={number}
      onChange={updateInputs}
      className="border-2 rounded-md border-amber-100 py-1 px-2 mq1:ml-4 mq2:ml-4 mq3:ml-4"
    />
  </label>
);

const ActionButtons = ({ closeCommentForm }: ActionButtonsProps) => (
  <div className="self-end mt-4 mq2:mt-5 mq3:mt-6">
    <input
      type="button"
      value="Cancel"
      onClick={closeCommentForm}
      className="rounded px-2.5 py-1 text-red-700 bg-red-200 hover:bg-red-300"
    />
    <input
      type="submit"
      value="Send"
      className="ml-3 rounded px-2.5 py-1 text-amber-700 bg-amber-200 hover:bg-amber-300"
    />
  </div>
);

export default CommentForm;
export { AuthorName, Number };
