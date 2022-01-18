import { ChangeEvent } from "react";

import type { TweetModelType, TweetType } from "@/shared/types";

type CommentFormProps = {
  parentTweet: TweetType;
  updateTweetsTreeDOM: (tweets: TweetModelType[]) => void;
  closeCommentForm: () => void;
};

type Inputs = {
  authorName: string;
  mathOperator: string;
  number: string;
};

type HeaderProps = {
  authorName: string;
  layout: number;
};

type AuthorNameProps = {
  authorName: string;
  updateInputs: (e: ChangeEvent<HTMLInputElement>) => void;
};

type MathOperatorProps = {
  mathOperator: string;
  updateInputs: (e: ChangeEvent<HTMLInputElement>) => void;
};

type NumberProps = {
  number: string;
  updateInputs: (e: ChangeEvent<HTMLInputElement>) => void;
};

type ActionButtonsProps = {
  closeCommentForm: () => void;
};

export type {
  ActionButtonsProps,
  AuthorNameProps,
  CommentFormProps,
  HeaderProps,
  Inputs,
  MathOperatorProps,
  NumberProps,
};
