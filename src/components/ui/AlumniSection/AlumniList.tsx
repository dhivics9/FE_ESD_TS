import { useCallback, useState } from 'react';
import AlumniItem from './AlumniItem';

enum ActionType {
  Next = 'next',
  Previous = 'previous',
}

interface AlumniListProps {
  alumnis: {
    date: string;
    title: string;
    description: string;
    link: string;
    imagePath: string;
  }[];
}

const AlumniList = ({ alumnis }: AlumniListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = useCallback(
    (action: ActionType) => {
      if (action === ActionType.Next) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % alumnis.length);
      } else if (action === ActionType.Previous) {
        // Decrement the currentIndex or go to the last event if it's already at the first event
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? alumnis.length - 1 : prevIndex - 1,
        );
      }
    },
    [currentIndex],
  );
  return (
    <div>
      <AlumniItem
        alumnis={alumnis}
        currentIndex={currentIndex}
        key={alumnis[0].title}
        alumni={alumnis[currentIndex]}
        onClick={handleClick}
      />
    </div>
  );
};

export default AlumniList;
