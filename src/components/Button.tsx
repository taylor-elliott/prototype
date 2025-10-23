import { ReactNode, MouseEventHandler } from "react";
import { cn } from "../utils/cn";

interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}

const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

const enabledStyles =
    "bg-blue-600 text-white cursor-pointer hover:bg-blue-700 focus:ring-blue-500";

const disabledStyles = "bg-gray-400 text-gray-700 cursor-not-allowed";

const Button = ({
    onClick,
    children,
    className,
    disabled = false,
}: ButtonProps) => {
    const classes = cn(
        baseStyles,
        disabled ? disabledStyles : enabledStyles,
        className,
    );
    return (
        <button onClick={onClick} className={classes} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
