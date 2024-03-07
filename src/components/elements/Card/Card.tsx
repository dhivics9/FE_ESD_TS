interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "p-6" }: CardProps) => {
  return (
    <div
      className={`w-full overflow-hidden rounded-lg border border-[--stroke-color] bg-[#ffffff] shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
