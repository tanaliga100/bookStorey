import MainLayout from "./components/layout/Main";

import "react-toastify/dist/ReactToastify.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DetailsPage from "./components/views/DetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
