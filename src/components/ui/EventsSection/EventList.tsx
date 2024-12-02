import { useCallback, useState } from 'react';
import EventItem from './EventItem';

enum ActionType {
  Next = 'next',
  Previous = 'previous',
}

interface EventViewProps {
  events: {
    date: string;
    title: string;
    description: string;
    link: string;
    imagePath: string;
  }[];
}

const EventView = ({ events }: EventViewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = useCallback(
    (action: ActionType) => {
      if (action === ActionType.Next) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
      } else if (action === ActionType.Previous) {
        // Decrement the currentIndex or go to the last event if it's already at the first event
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? events.length - 1 : prevIndex - 1,
        );
      }
    },
    [currentIndex],
  );
  return (
    <div className="events-container">
      {events.map((event, index) => (
        <EventItem
          key={`${event.title}-${index}`}
          event={event}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default EventView;
