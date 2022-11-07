import React from "react";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutMe" element={<Biography />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <div>
        <footer>
          Thank you!
        </footer>
      </div>
    </Router>
  );
}

export default App;
