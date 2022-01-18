import type { RightArrowIconProps } from "@/shared/icons/right-arrow/types";

const RightArrowIcon = ({ className }: RightArrowIconProps): JSX.Element => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M44 24 30 35.7V12.3z" />
    <path d="M6 20h27v8H6z" />
  </svg>
);

export default RightArrowIcon;
