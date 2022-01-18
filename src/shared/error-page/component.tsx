import Head from "next/head";

import type { ErrorPageProps } from "@/shared/error-page/types";
import Error404Illustration from "@/shared/illustrations/error-404/component";
import Error500Illustration from "@/shared/illustrations/error-500/component";
import Layout from "@/shared/layout/component";
import PageLink from "@/shared/page-link/component";

const ErrorPage = ({ code, heading, body }: ErrorPageProps): JSX.Element => (
  <>
    <Head>
      <title>Tweetulator</title>
    </Head>
    <Layout>
      <div className="flex justify-center space-x-3 mq2:space-x-4 mq3:space-x-5">
        <PageLink page="discussion" href="/" text="DISCUSSION" />
        <PageLink page="information" href="/info" text="INFORMATION" />
      </div>
      <div className="flex flex-col mt-5 mq1:flex-row mq1:justify-center mq1:items-center mq1:space-x-10 mq2:mt-8 mq3:mt-8">
        <div>
          <h1 className="text-center text-red-400">{heading}</h1>
          <p className="mt-3 text-center">{body}</p>
        </div>
        {
          {
            404: (
              <Error404Illustration className="mx-auto mt-6 mq1:mt-0 mq1:w-1/3 mq2:mt-10 mq2:w-2/3 mq3:mt-10 mq3:w-1/3" />
            ),
            500: (
              <Error500Illustration className="mx-auto mt-6 mq1:mt-0 mq1:w-1/3 mq2:mt-10 mq2:w-2/3 mq3:mt-10 mq3:w-1/3" />
            ),
          }[code]
        }
      </div>
    </Layout>
  </>
);

export default ErrorPage;
