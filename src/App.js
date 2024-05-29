import React from 'react';

import groTechLogo from './images/groTechLogo.png';
import house from './images/house-solid.svg';
import linkedIn from './images/linkedin.svg';
import github from './images/square-github.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={groTechLogo} className="gro-logo" alt="gro-logo" />
      </header>
      <div className="personal-me">
        <h1 className='pm-heading-name'>Rachel Collins</h1>
        <p className='pm-heading-title'>Mobile & Web Solutions Developer</p>
      </div>
      <div className='links'>
        <ul>
        <li>
          <img src={house} className='li-logos'/>
          <p>
            <a href='https://www.upwork.com/freelancers/~0106b33a111c1d1bc2?mp_source=share'>
              Work
            </a>
          </p>
        </li>
        <li>
          <img src={github} className='li-logos' />
          <p>
            <a href='https://github.com/CollinsRachel'>
              Notes
            </a>
          </p>
        </li>
        <li>
          <img src={linkedIn} className='li-logos' />
          <p>
            <a href='https://www.linkedin.com/in/rachel-c-b07889251/'>
              Profile
            </a>
          </p>
        </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
