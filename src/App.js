import './App.css';
// import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import ActivitiesPage from './components/activities/ActivitiesPage';
import { activities } from './data/activities';
import { entertainment } from './data/entertainment';

function App() {
  const [_entertainment, setEntertainment] = useState(entertainment);
  const [_activities, setActivities] = useState(activities);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/seashell-selections-fe/' element={<Home entertainment={_entertainment} />}></Route>
          <Route path='/activities' element={<ActivitiesPage activities={_activities} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
