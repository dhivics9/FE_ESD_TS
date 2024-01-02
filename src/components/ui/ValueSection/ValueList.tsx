import classNames from 'classnames';
import ValueItem from './ValueItem';

interface Props {
  values: {
    iconPath: string;
    name: string;
    value: string;
  }[];
  className?: string;
}

const ValueList = ({
  values,
  className = 'grid-cols-2 lg:grid-cols-3',
}: Props) => {

  
  return (
    <div
      className={classNames(
        'grid gap-x-[24px] gap-y-[48spx] md:gap-x-[32px] md:gap-y-[64px]',
        className,
      )}
    >
      {values.map((value, index) => (
        <ValueItem key={`${value.value}${index}`} value={value} />
      ))}
    </div>
  );
};

export default ValueList;
