interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({
  children,
  className = 'text-center text-[2.25rem] md:text-[3rem] leading-10 md:leading-[3.5rem] lg:text-xl ',
}: HeadingProps) => {
  return (
    <h1 className={`${className} font-semibold tracking-[-1.2px]`}>
      {children}
    </h1>
  );
};

export default Heading;
