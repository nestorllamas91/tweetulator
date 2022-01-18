import ErrorPage from "@/shared/error-page/component";

const Error500Page = (): JSX.Element => (
  <ErrorPage
    code={500}
    heading="500 Internal Server Error"
    body="Your request could not be processed because an error occurred on the server."
  />
);

export default Error500Page;
