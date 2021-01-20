import React from 'react';
import './App.css';
import { Description } from './components/Description/Description';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { RoomSection } from './components/Rooms/RoomSection';
import MainSlider from './components/Slider/Slider';
import { Events } from './components/Events/Events';
import './components/styles/Fonts.css';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Form />
      <MainSlider />
      <Description />
      <RoomSection />
      <Events />
      <Footer />
    </>
  );
}

export default App;
