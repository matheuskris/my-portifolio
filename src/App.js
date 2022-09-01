import Navigation from "./components/navbar/navbar.component";
import Banner from "./components/banner/banner.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";
import ContactForm from "./components/contact-form/contact-form.component";
import Footer from "./components/footer/footer.component";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
