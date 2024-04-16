import { Routes, Route } from "react-router-dom";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import Home from "./pages/Home";
import WebDevelopmnet from "./pages/services/WebDevelopmnet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
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
