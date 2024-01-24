import "./App.css";
import Home from "./components/sections/Home";
import Navbar from "./components/sections/Navbar";
import "@fortawesome/fontawesome-free/css/all.css";
import Service from "./components/sections/Service";
import About from "./components/sections/About";
import Service1 from "./components/sections/Service1";
import ServiceBanner from "./components/sections/ServiceBanner";
import Project from "./components/sections/Project";
import Client from "./components/sections/Client";
import Vedio from "./components/sections/Vedio";
import Testimonial from "./components/sections/Testimonial";
import { Route, Routes } from "react-router-dom";
import Hire from "./components/pages/hire_dev/Hire";
import HireDev from "./components/sections/HireDev";
import Schedule from "./components/pages/Schedule/Schedule";
import ContactPage from "./components/pages/Contact/ContactPage";
import Footer from "./components/sections/Footer/footer";
import LatestNews from "./components/sections/LatestNews";
import Faq from "./components/sections/Faq";
import DeveloperProfile from "./components/pages/devProfile/DeveloperProfile";
import Login from "../src/components/pages/Login/Login";


function App() {
  const isLogin = window.location.pathname === "/login";

  return (
    <>
      {!isLogin && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Service />
              <HireDev />
              <About />
              <Service1 />
              <ServiceBanner />
              <Project />
              <Client />
              <Vedio />
              <Testimonial />
              <Faq />
              <LatestNews />
            </>
          }
        ></Route>
        <Route path="/hire" element={<Hire />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="developerProfile" element={<DeveloperProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!isLogin && <Footer />}
    </>
  );
}

export default App;