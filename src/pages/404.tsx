import ErrorPage from "@/shared/error-page/component";

const Error404Page = (): JSX.Element => (
  <ErrorPage code={404} heading="404 Not Found" body="The resource you requested cannot be found on the server." />
);

export default Error404Page;
