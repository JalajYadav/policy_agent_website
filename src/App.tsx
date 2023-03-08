import React from 'react';
import './App.css';
import ContactUs from './components/ContactUs';
import GetSupport from './components/GetSupport';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <TopBar />
      </header>
      <Section1 />
      <Section2 />
      <Section3 />
      <GetSupport />
      <ContactUs />
    </div>
  );
}

export default App;
