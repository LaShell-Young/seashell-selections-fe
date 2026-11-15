import { Route, Routes } from 'react-router-dom';
import { activities } from './data/activities';
import { entertainment } from './data/entertainment';
import ActivitiesPage from './components/activities/ActivitiesPage';
import Header from './components/header/Header';
import Home from './components/home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home entertainment={entertainment} />} />
        <Route path="/activities" element={<ActivitiesPage activities={activities} />} />
      </Routes>
      <footer className="site-footer">
        <span>SeaShell Selections</span>
      </footer>
    </div>
  );
}

export default App;
