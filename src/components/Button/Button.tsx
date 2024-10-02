import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "default";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  value?: string;
}

function Button({
  children,
  type = "button",
  variant = "default",
  onClick,
  className = "",
  disabled = false,
  value = "",
}: ButtonProps) {
  const variantClasses = {
    default: "bg-black hover:bg-[#E0E0FF] transition-all duration-300 ease-in hover:text-gray-700 text-white font-medium",
    primary: "px-6 py-3 bg-blue-600 text-white rounded-md",
    secondary: "px-6 py-3 bg-slate-600 text-white rounded-md",
  };

  const selectedVariant = variantClasses[variant || "default"];

  return (
    <button
      value={value}
      disabled={disabled}
      className={`${selectedVariant} ${className} ${disabled ? "cursor-not-allowed" : ""}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
