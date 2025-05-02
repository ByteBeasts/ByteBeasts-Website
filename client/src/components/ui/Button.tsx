import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../libs/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium font-kallisto transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-secondary hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-transparent hover:bg-secondary hover:text-foreground",
        link: "bg-transparent underline-offset-4 hover:underline text-foreground",
        gradient: "relative text-primary-foreground overflow-hidden shimmer",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) => {
  const isGradient = variant === "gradient";
  
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, className }),
        isGradient && "relative overflow-hidden group"
      )}
      {...props}
    >
      {isGradient && (
        <>
          {/* Fondo con gradiente */}
          <span 
            className="absolute inset-0 bg-gradient-to-r from-brand-light to-brand-dark -z-10"
            aria-hidden="true"
          />
          
          {/* Efecto de hover */}
          <span 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white -z-10"
            aria-hidden="true"
          />
          
          {/* Efecto de brillo */}
          <span 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 -z-5 glow-animation" 
            aria-hidden="true"
          />
        </>
      )}
      {props.children}
    </button>
  );
};

export { Button, buttonVariants };
