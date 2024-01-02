import classNames from 'classnames';

interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}
const ButtonGroup = ({ children, className }: ButtonGroupProps) => {
  return (
    <div
      className={classNames(
        'max-[340px]:grid space-x-3 max-md:space-y-3 ',
        className,
      )}
    >
      {children}
    </div>
  );
};
export default ButtonGroup;
