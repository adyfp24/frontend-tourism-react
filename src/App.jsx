import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/blog" element={ <Blog/> } />
      </Routes>
    </div>
  );
}

export default App;
