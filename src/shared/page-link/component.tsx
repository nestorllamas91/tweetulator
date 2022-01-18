import Link from "next/link";

import EnterIcon from "@/shared/icons/enter/component";
import QuestionMarkIcon from "@/shared/icons/question-mark/component";
import type { PageLinkProps } from "@/shared/page-link/types";

const PageLink = ({ page, href, text }: PageLinkProps) => (
  <div className="grow">
    <Link href={href}>
      <a className="flex justify-center items-center rounded-md p-4 bg-blue-200 hover:no-underline">
        {
          {
            discussion: <EnterIcon className="w-5 fill-slate-800" />,
            information: <QuestionMarkIcon className="w-5 fill-slate-800" />,
          }[page]
        }
        <span className="ml-2 font-bold text-slate-800">{text}</span>
      </a>
    </Link>
  </div>
);

export default PageLink;
