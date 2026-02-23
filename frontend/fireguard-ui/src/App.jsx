import ChatbotDrawer from "./components/ChatbotDrawer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SafetyProtocols from "./pages/SafetyProtocols";
import EmergencyContacts from "./pages/EmergencyContacts";
import FirePrevention from "./pages/FirePrevention";
import FireTypes from "./pages/FireTypes";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import LearnSafety from "./pages/LearnSafety";
import { Routes, Route } from "react-router-dom";
import LearnQuiz from "./pages/LearnQuiz";
import LearnVideo from "./pages/LearnVideo";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">

      {/* TOP NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="flex-1">
         <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/protocols" element={<SafetyProtocols />} />
          <Route path="/contacts" element={<EmergencyContacts />} />
          <Route path="/fire-prevention" element={<FirePrevention />} />
          <Route path="/learn-safety" element={<LearnSafety />} />
          <Route path="/fire-types" element={<FireTypes />} />
          <Route path="/learn-quiz" element={<LearnQuiz />} />
          <Route path="/learn-video" element={<LearnVideo />} />
        </Routes>
      </div>

       {/* FOOTER */}
    <Footer />

      {/* CHATBOT */}
      <ChatbotDrawer />

    </div>
  );
}