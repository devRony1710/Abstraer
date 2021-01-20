import React from 'react';

import './roomSection.css';

import Room from '../../assets/room.jpg';

export const RoomSection = () => {
  return (
    <div className="RoomSectionContainer">
      <div className="RoomDescription">
        <h3>Accommodations</h3>
        <h1>Hollywood, meet industrial chic</h1>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
        </p>
        <a href="/">View Rooms</a>
      </div>
      <div className="Room-Img-Container">
        <img alt="RoomImg" src={Room} />
      </div>
    </div>
  );
};
