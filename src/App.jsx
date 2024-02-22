import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";
import Destinasi from "./pages/Destinasi";
import CobanRondo from "./pages/destinasi/CobanRondo";
import JatimPark from "./pages/destinasi/JatimPark";
import MuseumAngkut from "./pages/destinasi/MuseumAngkut";
import Semeru from "./pages/destinasi/Semeru";
import TuguMalang from "./pages/destinasi/TuguMalang";
import BlogDetail from "./pages/blog/BlogDetail";
import ChatBot from "./pages/chatbotAI/ChatBot";
import About from "./pages/About";
// import Login from "./auth/login";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        {/* <Route path="/auth" element={ <Login/> } /> */}
        <Route path="/about" element={ <About/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/blog/content" element={ <BlogDetail/> } />
        <Route path="/destinasi" element={ <Destinasi/> } />
        <Route path="/destinasi/coban-rondo" element={ <CobanRondo/> } />
        <Route path="/destinasi/jatim-park" element={ <JatimPark/> } />
        <Route path="/destinasi/museum-angkut" element={ <MuseumAngkut/> } />
        <Route path="/destinasi/semeru" element={ <Semeru/> } />
        <Route path="/destinasi/tugu-malang" element={ <TuguMalang/> } />
        <Route path="/chatbot" element={ <ChatBot/> } />
      </Routes> 
    </div>
  );
}

export default App;
