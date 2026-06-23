export const Button = ({
  className = "",
  size = "default",
  children,
  onClick,
  disabled = false,
  type = "button",
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:bg-primary/90 hover:shadow-primary/40";

  const classes = `${baseClasses} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
