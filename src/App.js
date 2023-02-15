import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { Outlet } from "react-router-dom";

const NavbarLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
