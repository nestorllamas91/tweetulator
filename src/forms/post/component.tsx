import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

import { AuthorName, Number } from "@/forms/comment/component";
import type { Inputs, PostFormProps } from "@/forms/post/types";

const PostForm = ({ updateTweetsTreeDOM }: PostFormProps): JSX.Element => {
  const [inputs, setInputs] = useState<Inputs>({ authorName: "", number: "" });
  const router = useRouter();

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const url =
        process.env.NODE_ENV === "production"
          ? "https://tweetulator-nestorllamas91.herokuapp.com/"
          : "http://localhost:8080/api/tweets/";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          authorName: inputs.authorName,
          message: parseInt(inputs.number, 10),
          isFirstTweet: true,
          parentTweetId: null,
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

  return (
    <div className="mt-4 border-2 rounded-lg p-3 border-amber-200 bg-amber-50 mq2:p-4 mq3:mt-6 mq3:p-5">
      <Header />
      <form onSubmit={submitForm} className="flex flex-col mt-3 mq2:mt-5 mq3:mt-6">
        <div className="flex flex-col space-y-2 mq1:space-y-3 mq2:space-y-3 mq3:space-y-3">
          <AuthorName authorName={inputs.authorName} updateInputs={updateInputs} />
          <Number number={inputs.number} updateInputs={updateInputs} />
        </div>
        <ActionButton />
      </form>
    </div>
  );
};

const Header = () => (
  <>
    <span className="font-bold">Write your post</span>
    <hr className="mt-2 border-slate-400" />
  </>
);

const ActionButton = () => (
  <input
    type="submit"
    value="Send"
    className="self-end mt-5 rounded px-2.5 py-1 text-amber-700 bg-amber-200 hover:bg-amber-300"
  />
);

export default PostForm;
