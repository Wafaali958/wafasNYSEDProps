import React from 'react';
import Navbar from './components/Navbar.js';
import SchoolCard from './components/SchoolCard.js';
import data from './nycSchoolEnrollmentData.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
        {data.map(school =>(
        <SchoolCard 
        name={school.ENTITY_NAME}
        year={school.YEAR}
        hisp={school.PER_HISP}
        blk={school.PER_BLACK}
        white={school.PER_WHITE}
        male={school.PER_ASIAN}
        female={school.PER_MALE}
        swd={school.PER_SWD}
        ecdis={school.PER_ECDIS}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
