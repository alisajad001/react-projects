import { useState } from "react";
import Accordion from "./Accordion";

const questions = [
  {
    title: "What is HTML?",
    content: "HTML is the standard markup language for creating Web pages.",
  },
  {
    title: "What is CSS?",
    content:
      "CSS is the language for describing the presentation of Web pages, including colors, layout, fonts, and graphics.",
  },
  {
    title: "What is JavaScript?",
    content:
      "JavaScript is a programming language for front-end web development. It is used to make web pages interactive and dynamic.",
  },
  {
    title: "Why use JavaScript?",
    content:
      "Because it is easy to learn and use. It is used to make web pages interactive and dynamic.",
  },
];

function App() {
  const [selected, setSelected] = useState(null);

  const handleSelection = (id) => {
    if (id === selected) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  return (
    <>
      {questions.map((question, id) => (
        <Accordion
          key={id}
          id={id}
          {...question}
          selected={selected}
          onSelect={handleSelection}
        />
      ))}
    </>
  );
}

export default App;
