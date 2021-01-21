import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import calendar from '../../assets/calendar.png';

import './form.css';

export const Form = () => {
  const { handleSubmit, register } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  const [visible, setVisible] = useState(false);

  const handleOpenClick = () => setVisible(true);

  const handleCloseClick = () => setVisible(false);

  return (
    <div className="FormMainContainer">
      <button onClick={handleOpenClick} className="button">
        Book Now
      </button>
      <form
        onSubmit={handleSubmit(submitForm)}
        className={`FormContainer ${visible && 'active'}`}
      >
        <button onClick={handleCloseClick} className="CloseIcon">
          X
        </button>
        <h2>Book Now</h2>
        <div className="FormItem">
          <h4>Arrival Date</h4>
          <input
            ref={register({
              required: 'La Fecha de Inicial de Hospedaje es requerida',
              minLength: {
                value: 8,
                message:
                  'Ingrese una fecha en formato DDMMAAAA sin caracteres especiales',
              },
            })}
            name="arrival"
            placeholder="Thurds, November 29"
          />
          <img alt="icon" src={calendar} />
        </div>
        <div className="FormItem">
          <h4>Departure Date</h4>
          <input
            ref={register({
              required: 'La Fecha Final de hospedaje es requerida',
              minLength: {
                value: 8,
                message:
                  'Ingrese una fecha en formato DDMMAAAA sin caracteres especiales',
              },
            })}
            name="departure"
            placeholder="Sat, December 1"
          />
          <img alt="icon" src={calendar} />
        </div>
        <div className="FormGuessItem">
          <h4>Guess</h4>
          <input
            ref={register({
              required: 'La cantidad de adultos es requerida',
              maxLength: {
                value: 1,
                message: 'Ingrese el numero de adultos comprendido entre 0-4',
              },
            })}
            name="adult"
            className="GuessInput"
            placeholder="1 Adult 🔻"
          />
          <input
            ref={register({
              required: 'La cantidad de ni#os es requerida',
              maxLength: {
                value: 1,
                message: 'Ingrese el numero de ni#os comprendido entre 0-4',
              },
            })}
            name="child"
            className="GuessInput"
            placeholder="1 Child 🔻"
          />
          {/* <img alt="icon" className="arrowInput" src={arrowInput} /> */}
        </div>
        <p>GET READY! You are about to get our best price. Guaranteed.</p>
        <button onClick={handleSubmit} type="submit" className="SubmitForm">
          LET'S GO
        </button>
        <br />
        <br />
        <a href="/" className="AlternativeLink">
          OR, BOOK YOUR GROUP
        </a>
      </form>
    </div>
  );
};
