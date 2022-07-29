import cn from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
