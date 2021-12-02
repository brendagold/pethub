//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes, Redirect } from "react-router-dom";
import Footer from './components/Footer';
import DetailsPage from './components/DetailsPage';
import Main from './Main';

function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/pet" element={<DetailsPage />} />
        {/* <Route path="/not-found">
          <NotFound />
        </Route>
        <Redirect to="/not-found" /> */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
