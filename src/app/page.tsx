
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Nav />
        <Main />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
