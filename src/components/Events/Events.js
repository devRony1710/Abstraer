import React from 'react';

import event1 from '../../assets/event-1.jpg';
import event2 from '../../assets/event-2.jpg';
import event3 from '../../assets/event-3.jpg';
import event4 from '../../assets/event-4.jpg';

// styles
import './event.css';

export const Events = () => {
  return (
    <div className="EventContainer">
      <h2>This Month's Most Anticipated Events</h2>
      <div className="Event-Imgs-Container">
        <img alt="Event Img" src={event1} />
        <img alt="Event Img" src={event2} />
        <img alt="Event Img" src={event3} />
        <img alt="Event Img" src={event4} />
      </div>
    </div>
  );
};
