// import logo from "./logo.svg";
import "./App.css";
import Tuiter from "./tuiter";
import Labs from "./labs";
import { HashRouter, Navigate, Link, Routes, Route } from "react-router-dom";
import Nav from "./nav";

// import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="container">
      <HashRouter>
        {/* <Link to="hello">Hello World</Link> | <Link to="labs">Labs</Link> |{" "}
        <Link to="tuiter">Tuiter</Link> */}
        <Nav/>
        <Routes>
          <Route path="/" element={<Navigate to={'labs'}/>} />
          <Route path="hello" element={<h1>Hello World</h1>} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
