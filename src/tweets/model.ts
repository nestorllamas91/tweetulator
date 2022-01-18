import { Document, Model, model, Schema } from "mongoose";

export interface TweetModelInterface extends Document {
  _id: string;
  authorName: string;
  message: string;
  childTweetsIds: string[] | null;
  creationDate: string;
  updateDate: string;
  __v: number;
}

const tweetSchema: Schema = new Schema(
  {
    authorName: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    childTweetsIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tweet",
        required: true,
      },
    ],
  },
  {
    timestamps: {
      createdAt: "creationDate",
      updatedAt: "updateDate",
    },
  }
);

const Tweet: Model<TweetModelInterface> = model("Tweet", tweetSchema);

export default Tweet;
