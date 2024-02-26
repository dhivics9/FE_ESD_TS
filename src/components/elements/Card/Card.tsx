interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`w-full overflow-hidden rounded-lg border border-[--stroke-color] bg-[#ffffff] p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
