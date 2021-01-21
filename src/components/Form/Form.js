import React, { useState } from 'react';
import calendar from '../../assets/calendar.png';

import './form.css';

export const Form = () => {
  const [visible, setVisible] = useState(false);

  const handleOpenClick = () => setVisible(true);

  const handleCloseClick = () => setVisible(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="FormMainContainer">
      <button onClick={handleOpenClick} className="button">
        Book Now
      </button>
      <form
        onSubmit={handleSubmit}
        className={`FormContainer ${visible && 'active'}`}
      >
        <button onClick={handleCloseClick} className="CloseIcon">
          X
        </button>
        <h2>Book Now</h2>
        <div className="FormItem">
          <h4>Arrival Date</h4>
          <input name="TEST" placeholder="Thurds, November 29" />
          <img alt="icon" src={calendar} />
        </div>
        <div className="FormItem">
          <h4>Departure Date</h4>
          <input placeholder="Sat, December 1" />
          <img alt="icon" src={calendar} />
        </div>
        <div className="FormGuessItem">
          <h4>Guess</h4>
          <input className="GuessInput" placeholder="1 Adult 🔻" />
          <input className="GuessInput" placeholder="1 Child 🔻" />
          {/* <img alt="icon" className="arrowInput" src={arrowInput} /> */}
        </div>
        <p>GET READY! You are about to get our best price. Guaranteed.</p>
        <a href="/" className="SubmitForm">
          LET'S GO
        </a>
        <br />
        <br />
        <button type="submit" className="AlternativeLink">
          OR, BOOK YOUR GROUP
        </button>
      </form>
    </div>
  );
};
