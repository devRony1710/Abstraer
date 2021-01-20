import React from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import MainSlider from './components/Slider/Slider';
import './components/styles/Fonts.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSlider />
      <Form />
    </div>
  );
}

export default App;
