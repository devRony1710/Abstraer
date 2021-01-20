import React from 'react';
// import calendar from '../../assets/calendar.png';

import './form.css';

export const Form = () => {
  return (
    <div class="sticky-tab">
      <h3>Sticky Side Tab</h3>
      <a href="/">Link to some page</a>
      <a href="/">Link to another page</a>
      <i class="fa fa-chevron-left"></i>
      <div class="social-links">
        <a href="/">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="/">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};
