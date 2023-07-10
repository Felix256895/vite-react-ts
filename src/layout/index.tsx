import { Routes, Route } from "react-router-dom";
import Head from "./Head";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About";

const Header: React.FC = () => {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Header;
