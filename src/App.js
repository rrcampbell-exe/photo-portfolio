import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: "hashtag",
      description:
        "Our eldest cat, the little big sister, Hashtag.",
    },
    {
      name: "rhaegar",
      description:
        "He cuddles. He muddles. And often, he trundles.",
    },
    {
      name: "two-gether",
      description:
        "They're friends. Sometimes.",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
