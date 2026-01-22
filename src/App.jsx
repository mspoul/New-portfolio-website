 import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();

  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* 1. THE SIDE NAV */}
      <Navbar />

      {/* 2. MAIN CONTENT AREA */}
      {/* md:pl-20 ensures that on Desktop, the content starts AFTER the 80px wide Navbar */}
      <main className="md:pl-20 transition-all duration-500">
        
        {/* AnimatePresence allows pages to fade out before the new one fades in */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              } 
            />
            <Route 
              path="/about" 
              element={
                <PageWrapper>
                  <AboutMe />
                </PageWrapper>
              } 
            />
            <Route 
              path="/projects" 
              element={
                <PageWrapper>
                  <Projects />
                </PageWrapper>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

// Simple wrapper to give every page a smooth entrance
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default App;