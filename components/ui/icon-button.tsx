import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  icon?: React.ReactElement;
}

const IconButton = ({
    onClick,
    className,
    icon 
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `rounded-full
        p-2
        flex items-center
        justify-center
        bg-white border
        shadow-md
        hover:scale-110
        transition`,
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;