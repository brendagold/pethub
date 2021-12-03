import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes, Redirect } from "react-router-dom";
import Footer from './components/Footer';
import DetailsPage from './components/DetailsPage';
import Main from './Main';
import NotFound from './components/NotFound';
import api from './services/api';

function App() {
  const [fullData, setFullData] = useState([])
  const [exhibits, setExhibits] = useState([]);
  const [togos, setTogos] = useState([]);
  

  const getExhibits = async () => {
    const response = await api.get();
    setFullData(response.pets)
    console.log(fullData.pets)
  };

  useEffect(() => {
    getExhibits();
   
  }, []);
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/pet" element={<DetailsPage />} />
        <Route path="/not-found" element={<NotFound />} />
          
        {/* <Redirect to="/not-found" /> */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
