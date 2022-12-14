import { Fragment } from 'react';
import './App.css';
import LandingPages from './LandingPage';
import { Route, Routes } from "react-router-dom";
import LogIN from './Components/Layout/LogInPage/login';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path='/' element={<LandingPages />} />
        <Route path='/LogIN' element={<LogIN />} />
      </Routes>
    </Fragment>
  );
}

export default App;
