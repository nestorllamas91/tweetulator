import Head from "next/head";
import Link from "next/link";

import { SectionHeading } from "@/information/component";
import Layout from "@/shared/layout/component";
import PageLink from "@/shared/page-link/component";

const InformationPage = (): JSX.Element => (
  <>
    <Head>
      <title>Tweetulator</title>
    </Head>
    <Layout>
      <div className="space-y-4 mq3:space-y-6">
        <PageLink page="discussion" href="/" text="DISCUSSION" />
        <TableOfContents />
        <SectionHeading name="Functional information" id="functional-information" entity="section" />
        <Overview />
        <Features />
        <SectionHeading name="Technical information" id="technical-information" entity="section" />
        <Application />
        <Technologies />
        <Infrastructure />
        <Choices />
        <Details />
      </div>
    </Layout>
  </>
);

const TableOfContents = () => {
  const sectionsData = [
    {
      name: "Functional information",
      id: "functional-information",
      subsections: [
        { name: "Overview", id: "overview" },
        { name: "Features", id: "features" },
      ],
    },
    {
      name: "Technical information",
      id: "technical-information",
      subsections: [
        { name: "Application", id: "application" },
        { name: "Technologies", id: "technologies" },
        { name: "Infrastructure", id: "infrastructure" },
        { name: "Choices", id: "choices" },
        { name: "Details", id: "details" },
      ],
    },
  ];
  return (
    <div className="rounded-md px-8 py-6 bg-slate-100">
      <h2 className="mb-2">Table of Contents</h2>
      <ul>
        {sectionsData.map(({ name, id, subsections }) => (
          <li key={id}>
            <a href={`#${id}`}>{name}</a>
            <ol>
              {subsections.map(({ name, id }) => (
                <li key={id} className="ml-3">
                  <a href={`#${id}`} className="ml-2">
                    {name}
                  </a>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Overview = () => (
  <div>
    <SectionHeading name="Overview" id="overview" entity="subsection" />
    <ul>
      <li>
        Tweetulator is a place where a weird discussion happens. The initial author of the discussion starts posting a
        tweet with a number as for the message, and other people comment a new tweet to that post with a math operator
        and a new number as for the message, even with threads of comments.
      </li>
      <li>
        It is a basic exercise for the complete practice of web development (frontend, backend, database, DevOps),
        problem solving, and implementation of a non-trivial algorithm.
      </li>
    </ul>
  </div>
);

const Features = () => (
  <div>
    <SectionHeading name="Features" id="features" entity="subsection" />
    <p>The technologies used for the implementation of this web application are:</p>
    <ul>
      <li>The initial author of the discussion posts a number as for the message (tweet as a post).</li>
      <li>
        Other people comment (reply) to that post with a math operator and a new number as for the message (tweet as a
        comment).
      </li>
      <li>There may be comment threads, that is, commenting (replying) to other previous comments.</li>
      <li>
        The depth levels of the threads is undetermined, there is no limit regarding that. Every new depth level is
        visually represented with an indentation.
      </li>
      <li>
        The first level comments technically are not threads of the initial post, so for these ones there is no
        indentation.
      </li>
      <li>
        Since user authentication was not a requirement for this exercise and therefore is has not been implemented,
        users are simulated by entering their names in each new tweet, and an anonymous profile picture is set as
        default for all the tweets.
      </li>
      <li>
        Once the tweet is sent, it cannot be edited or deleted, since its corresponding author is not authenticated to
        be able to do so.
      </li>
      <li>
        As this exercise is intended for practice, in order to reset the database (delete all the tweets) and start over
        with a new discussion, a public button is provided for that.
      </li>
    </ul>
  </div>
);

const Application = () => (
  <div>
    <SectionHeading name="Application" id="application" entity="subsection" />
    <p>
      The source code of the web application corresponding to this website can be found under the MIT license at his{" "}
      <a href="https://github.com/nestorllamas91/tweetulator">GitHub repository</a>.
    </p>
  </div>
);

const Technologies = () => (
  <div>
    <SectionHeading name="Technologies" id="technologies" entity="subsection" />
    <p>The technologies used for the implementation of this web application are:</p>
    <ul>
      <li>
        <span className="font-bold">Frontend</span>: TypeScript, React, Next.js, Tailwind CSS.
      </li>
      <li>
        <span className="font-bold">Backend</span>:TypeScript, Node.js, Express.js (RESTful API).
      </li>
      <li>
        <span className="font-bold">Database</span>: TypeScript, MongoDB, Mongoose.
      </li>
    </ul>
  </div>
);

const Infrastructure = () => (
  <div>
    <SectionHeading name="Infrastructure" id="infrastructure" entity="subsection" />
    <p>The infrastructure, including DevOps, used to carry out this web application is:</p>
    <ul>
      <li>
        <span className="font-bold">Tools</span>: Visual Studio Code, Postman, MongoDB Compass, Node.js, Git, Google
        Chrome.
      </li>
      <li>
        <span className="font-bold">Hostings</span>: Heroku (application), MongoDB Atlas (database).
      </li>
      <li>
        <span className="font-bold">Version control</span>: Git, GitHub.
      </li>
      <li>
        <span className="font-bold">Container engine</span>: Docker, Docker Compose.
      </li>
    </ul>
  </div>
);

const Choices = () => (
  <div>
    <SectionHeading name="Choices" id="choices" entity="subsection" />
    <p>
      Regarding the technologies and infrastructure used, the requirements for this exercise were the mandatory use of
      TypeScript, React, Node.js, and Docker Compose, so the choice of the remaining technologies and infrastructure has
      been personal and should be rightly argued.
    </p>
    <ul>
      <li>
        Next.js allows you to work with React in a professional and optimal way compared to other toolchains like Create
        React App, which is more suitable for learning purposes. So Next.js is ideal for an exercise like this.
      </li>
      <li>
        Tailwind CSS lets you style with speed and productivity. So Tailwind CSS is ideal for an exercise like this.
      </li>
      <li>
        No user interface library has been used for this exercise, everything has been build from scratch with HTML
        elements and Tailwind CSS classes.
      </li>
      <li>
        No state management library has been used for this exercise, as there was no need to have a centralized global
        state for the application.
      </li>
      <li>
        Express.js with RESTful API lets you to quickly implement the API without much complexity. So Express.js with
        RESTful API is ideal for an exercise like this.
      </li>
      <li>
        MongoDB with Mongoose, which use the NoSQL language, lets you to have a less excessive and less complex database
        than it would be with a SQL database like PostgreSQL. So MongoDB with Mongoose is ideal for an exercise like
        this.
      </li>
      <li>
        As for the deployment to production, Heroku is used because it basically allows to host for this kind of basic
        exercises both frontend and backend applications for free, and MongoDB Atlas is used because it is the official
        cloud provider for MongoDB databases and it allows 512 MB of data for free.
      </li>
    </ul>
  </div>
);

const Details = () => (
  <div>
    <SectionHeading name="Details" id="details" entity="subsection" />
    <ul>
      <li>
        The web application is implemented using Next.js and Express.js as 1 single app, where the Express.js server is
        connected to the Next.js app, so that the Express.js server listens on 1 port handling both the incoming HTTP
        requests from Express.js itself and the pages requests from Next.js. They are not 2 separated apps or services,
        the whole app just runs on 1 port, the port where the Express.js server is listening.
      </li>
      <li>
        The web application is structured by features (tweet, forms/post, forms/comment, etc.) instead of file types
        (component, types, router, controller, model, etc.). Each feature has its own file types.
      </li>
      <li>
        The web application consists of 4 Next.js pages:&nbsp;
        <Link href="/">
          <a>discussion page</a>
        </Link>
        ,&nbsp;
        <Link href="/info">
          <a>information page</a>
        </Link>
        ,&nbsp;
        <Link href="/404">
          <a>404 error page</a>
        </Link>
        &nbsp;(when the user tries to navigate to a page which does not exist),&nbsp;and&nbsp;
        <Link href="/500">
          <a>500 error page</a>
        </Link>
        &nbsp;(when the user gets an error as a response to any of the API requests).
      </li>
      <li>
        The web application consists of 3 Express.js API endpoints: GET all the tweets, POST a tweet (post or comment),
        and DELETE all the tweets.
      </li>
      <li>
        The web application consists of just 1 MongoDB collection, for storing all the tweets. For the development stage
        a local instance of MongoDB has been used (localhost). For the production stage a remote instance of MongoDB has
        been used (MongoDB Atlas).
      </li>
      <li>
        Only the necessary dependencies (npm packages) have been used for the operation of the web application. Thus, a
        more optimized application has been obtained.
      </li>
      <li>
        The font Montserrat is used for the headings and the font Lato for the bodies. Both fonts are local assets of
        the web application, so that they are available immediately when loading the website.
      </li>
      <li>
        All the images used are in SVG format and optimized with the SVGO tool. They are used in the web application
        with the inline &lt;svg&gt; element, which renders them fast when loading the website.
      </li>
      <li>For linting the source code of the application, that is, fixing it, it has been used ESLint.</li>
      <li>
        For linting the TypeScript types of the source code of the application it has been used the TypeScript compiler
        (tsc).
      </li>
      <li>For giving format to the source code of the application it has been used Prettier.</li>
      <li>
        For compiling the frontend (Next.js with TypeScript) it has been used the Next.js compiler, which under the hood
        uses the Speedy Web Compiler (SWC).
      </li>
      <li>For compiling the backend (Express.js with TypeScript) it has been used the TypeScript compiler (tsc).</li>
      <li>
        For running the whole app in the development stage it has been used nodemon, while for the production stage it
        has been used Node.js.
      </li>
      <li>
        In short, the web application is well structured, modular, reusable, scalable, optimized, neat, and follows best
        practices.
      </li>
      <li>
        In short, the website is fully functional, has a nice and responsive user interface designed for any type of
        device (mobile phones, tablets, and PCs) and device orientation (portrait and landscape), has a suitable user
        experience, and it loads fast.
      </li>
    </ul>
  </div>
);

export default InformationPage;
