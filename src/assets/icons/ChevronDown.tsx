import { FC } from "react";

type Props = {
  className?: string;
};

const ChevronDownIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export default ChevronDownIcon;
