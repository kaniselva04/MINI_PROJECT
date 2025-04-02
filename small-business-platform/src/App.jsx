import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import BusinessDetails from "./pages/BussinessDetails";
import BusinessList from "./pages/BussinessList";
import UserHistory from "./Components/UserHistory";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<BusinessList />} />
        <Route path="/business/:id" element={<BusinessDetails />} />
        <Route path="/history" element={<UserHistory />}/>
      </Routes>
    </>
  );
}

export default App;
