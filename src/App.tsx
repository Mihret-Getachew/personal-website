import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
function App() {
  console.log(import.meta.env.VITE_APP_MAILGUN_DOMAIN);
  return (
    <>
      <Navigation />
      <div
        style={{
          padding: "0 5%",
        }}
      >
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
