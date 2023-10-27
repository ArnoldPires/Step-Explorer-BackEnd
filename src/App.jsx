import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header";
import HomePage from "./pages/homePage/HomePage";
import HikeGuide from "./pages/hikeGuide/HikeGuide";
import HikeSearch from "./pages/hikeSearch/HikeSearch";
import CreateTrail from "./pages/createTrail/CreateTrail";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HikeGuide" element={<HikeGuide />} />
          <Route path="/HikeSearch" element={<HikeSearch />} />
          <Route path="/CreateTrail" element={<CreateTrail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;