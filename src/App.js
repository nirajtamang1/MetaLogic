import { Routes, Route } from "react-router-dom";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import Home from "./pages/Home";
import WebDevelopmnet from "./pages/services/WebDevelopmnet";
import Career from "./pages/Career";
import Blogs from "./pages/Blogs";
import Aboutus from "./pages/Aboutus";

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
          <Route path="webDevelopment" element={<WebDevelopmnet />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
