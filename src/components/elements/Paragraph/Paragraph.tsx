import classNames from 'classnames';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p className={classNames(`text-[--gray-500] font-normal `, className)}>
      {children}
    </p>
  );
};

export default Paragraph;
