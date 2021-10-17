import { useState, useRef, useEffect } from "react";
import data from "./data";
import Review from "./components/Review";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function App() {
  const [people, setPeople] = useState(data);
  const [indexToShow, setIndexToShow] = useState(0);

  const btnClicked = (direction) => {
    if (direction == "left") {
      setIndexToShow(indexToShow - 1);
    } else if (direction == "right") {
      setIndexToShow(indexToShow + 1);
    }
  };

  const show = () => {
    if (indexToShow < 0) {
      setIndexToShow(people.length - 1);
    } else if (indexToShow >= people.length) {
      setIndexToShow(0);
    }
  };

  return (
    <main>
      <h1 className="heading">
        <span>/</span>Reviews
      </h1>
      {show()}

      <FiChevronLeft
        className="slide slide1"
        onClick={() => btnClicked("left")}
      />
      <FiChevronRight
        className=" slide slide2"
        onClick={() => btnClicked("right")}
      />
      <section className="section">
        <Review person={people[indexToShow]} />
      </section>
    </main>
  );
}

export default App;
