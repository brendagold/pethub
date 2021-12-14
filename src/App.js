import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import DetailsPage from "./components/DetailsPage";
import Main from "./Main";
import NotFound from "./components/NotFound";
import api from "./services/api";

function App() {
  const [fullData, setFullData] = useState([]);
  const [loading, setLoading] = useState(false)



  const getData = async () => {
    setLoading(true)
    try {
      // const response = await api.get();
      // const data = await response.json
      const response = await fetch(`https://pets-v2.dev-apis.com/pets`)
      const data = await response.json()
    setFullData(data.pets);
    console.log(data)
    setLoading(false)
   
    } catch (error) {
      console.log(error)
    }
   
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main data={fullData} />} />
        <Route path="/pet/:id" element={<DetailsPage />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      {/* <Navigate to="/not-found" replace={true} /> */}
      <Footer />
    </div>
  );
}

export default App;
