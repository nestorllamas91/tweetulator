import { ChangeEvent } from "react";

import type { TweetModelType } from "@/shared/types";

type PostFormProps = {
  updateTweetsTreeDOM: (tweets: TweetModelType[]) => void;
};

type Inputs = {
  authorName: string;
  number: string;
};

type AuthorNameProps = {
  authorName: string;
  updateInputs: (e: ChangeEvent<HTMLInputElement>) => void;
};

type NumberProps = {
  number: string;
  updateInputs: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type { AuthorNameProps, Inputs, NumberProps, PostFormProps };
