import React from "react";

import { Routes, Route } from "react-router-dom";

// Components
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import Layout from "./Layout/Layout";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
