import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref)=>{
    return (
        <button {...props} type={type} ref={ref} className={cn("w-auto rounded-2xl flex bg-black border-transparent py-5 px-5 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold transition hover:opacity-75", className)}>
            {children}
        </button>
    )
})

Button.displayName = "Button";

export default Button;