import classNames from 'classnames';
import Heading from '../../elements/Heading/Heading';
import Paragraph from '../../elements/Paragraph/Paragraph';

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <div className='space-y-6'>
      <div className='max-w-[768px]'>
        <div className='space-y-[20px]'>{children}</div>
      </div>
    </div>
  );
};

const HeadingTop = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className='text-[#6941C6] tex t-center font-inter text-[16px] md:text-[14px] font-semibold leading-6'>
      {children}
    </h3>
  );
};

const HeadingBottom = ({
  children,
  className = 'text-[24px] md:text-[28px]',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Heading
      className={classNames(
        'font-inter text-center font-semibold leading-11 tracking-tighter',
        className,
      )}
    >
      {children}
    </Heading>
  );
};

const ParagraphBottom = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Paragraph
      className={classNames(
        'text-center text-[#667085] font-inter text-[16px] md:text-[18px] font-normal leading-7',
        className,
      )}
    >
      {children}
    </Paragraph>
  );
};

SectionHeading.HeadingTop = HeadingTop;
SectionHeading.HeadingBottom = HeadingBottom;
SectionHeading.ParagraphBottom = ParagraphBottom;

export default SectionHeading;
