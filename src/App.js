import { useState } from "react";
import data from "./data";
import Review from "./components/Review";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <h1>
        <span>/</span>Reviews
      </h1>
      <FiChevronLeft />
      <FiChevronRight />
      <section>
        {people.map((person) => {
          return <Review key={person.id} person={person} />;
        })}
      </section>
    </main>
  );
}

export default App;
