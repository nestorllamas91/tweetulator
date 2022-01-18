import type { SectionHeadingProps } from "@/information/types";
import AnchorLinkIcon from "@/shared/icons/anchor-link/component";

const SectionHeading = ({ name, id, entity }: SectionHeadingProps) => (
  <div className="flex items-center mb-2">
    <a href={`#${id}`}>
      <AnchorLinkIcon className="w-5 stroke-2 stroke-slate-300 fill-transparent hover:stroke-slate-400" />
    </a>
    {
      {
        section: (
          <h2 id={id} className="ml-3">
            {name}
          </h2>
        ),
        subsection: (
          <h3 id={id} className="ml-3">
            {name}
          </h3>
        ),
      }[entity]
    }
  </div>
);

export { SectionHeading };
