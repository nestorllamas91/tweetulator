import type { EnterIconProps } from "@/shared/icons/enter/types";

const EnterIcon = ({ className }: EnterIconProps): JSX.Element => (
  <svg viewBox="0 0 64 64" className={className}>
    <path d="m28.541 42.197 4.237 4.248L46.92 32.302 32.773 18.155l-4.237 4.248 5.898 5.898-31.339.001v8l31.342-.002-5.896 5.897Z" />
    <path d="M3.095 22.302h6v-13h46v46h-46v-13h-6v19h58v-58h-58v19Z" />
    <path d="m28.536 22.403 5.898 5.898-31.339.001v4H46.92L32.773 18.155l-4.237 4.248Z" />
    <path d="M58.095 58.302v-52h-52v16h-3v-19h58v58h-58v-19h3v16h52Z" />
  </svg>
);

export default EnterIcon;
