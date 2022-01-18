import type { ReplyIconProps } from "@/shared/icons/reply/types";

const ReplyIcon = ({ className }: ReplyIconProps): JSX.Element => (
  <svg viewBox="0 0 18 14" className={className}>
    <path d="M7 3V1.41C7 .52 5.92.07 5.29.7L.7 5.29a.996.996 0 0 0 0 1.41l4.59 4.59c.63.63 1.71.19 1.71-.7V8.9c5 0 8.5 1.6 11 5.1C17 9 14 4 7 3Z" />
  </svg>
);

export default ReplyIcon;
