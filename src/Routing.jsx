import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import Layout from "./Layout";

function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Routing;
