import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {

  const [entertainment, setEntertainment] = useState();

  const getEntertainment = async () => {
    try {
      const response = await api.get("/api/entertainment/all");

      setEntertainment(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getEntertainment();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home entertainment={entertainment} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
