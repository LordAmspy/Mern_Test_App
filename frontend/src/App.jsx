
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

/**
 * App Layout
 */

function App() {

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-6">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

        </Routes>

      </div>

    </div>
  );
}

export default App;
