import React from 'react';
import './App.css';
import { Description } from './components/Description/Description';
// import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { RoomSection } from './components/Rooms/RoomSection';
import MainSlider from './components/Slider/Slider';
import './components/styles/Fonts.css';

function App() {
  return (
    <>
      <Header />
      <MainSlider />
      {/* <Form /> */}
      <Description />
      <RoomSection />
    </>
  );
}

export default App;
