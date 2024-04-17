import { Routes, Route } from "react-router-dom";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import Home from "./pages/Home";
import WebDevelopment from "./pages/services/WebDevelopment";
import Career from "./pages/Career";
import Blogs from "./pages/Blogs";
import Aboutus from "./pages/Aboutus";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services">
          <Route
            path="software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="webDevelopment" element={<WebDevelopment />} />
          <Route
            path="mobileAppDevelopment"
            element={<MobileAppDevelopment />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
