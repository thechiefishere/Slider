import React, { Component, useState, useEffect } from "react";
import data from "./data";
import Review from "./components/Review";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function App() {
  const [people, setPeople] = useState(data);
  const [indexToShow, setIndexToShow] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndexToShow(indexToShow - 1);
    }, 6000);

    return () => {
      clearInterval(id);
    };
  });

  useEffect(() => {
    if (indexToShow < 0) {
      setIndexToShow(people.length - 1);
    } else if (indexToShow >= people.length) {
      setIndexToShow(0);
    }
  }, [indexToShow]);

  const btnClicked = (direction) => {
    if (direction == "left") {
      setIndexToShow(indexToShow - 1);
    } else if (direction == "right") {
      setIndexToShow(indexToShow + 1);
    }
  };

  return (
    <main>
      <h1 className="heading">
        <span>/</span>Reviews
      </h1>

      <FiChevronLeft
        className="slide slide1"
        onClick={() => btnClicked("left")}
      />
      <FiChevronRight
        className=" slide slide2"
        onClick={() => btnClicked("right")}
      />
      {indexToShow < people.length && indexToShow >= 0 && (
        <section className="section">
          <Review person={people[indexToShow]} />
        </section>
      )}
    </main>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       people: data,
//       indexToShow: 0,
//       flag: false,
//     };

//     this.btnClicked = this.btnClicked.bind(this);
//   }

//   btnClicked(direction) {
//     // console.log("in btnClicked indexToShow is " + this.state.indexToShow);

//     if (direction == "left") {
//       this.setState(
//         (prevState) => ({
//           indexToShow: this.state.indexToShow - 1,
//         }),
//         () => {
//           if (this.state.indexToShow < 0) {
//             this.setState({
//               ...this.state,
//               indexToShow: this.state.people.length - 1,
//             });
//           }
//         }
//       );
//     } else if (direction == "right") {
//       this.setState(
//         (prevState) => ({
//           indexToShow: this.state.indexToShow + 1,
//         }),
//         () => {
//           if (this.state.indexToShow >= this.state.people.length) {
//             this.setState({
//               ...this.state,
//               indexToShow: 0,
//             });
//           }
//         }
//       );
//     }
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     setInterval(() => {
//       this.setState(
//         (prevState) => ({
//           indexToShow: this.state.indexToShow - 1,
//         }),
//         () => {
//           if (this.state.indexToShow < 0) {
//             this.setState({
//               ...this.state,
//               indexToShow: this.state.people.length - 1,
//             });
//           }
//         }
//       );
//     }, 6000);
//   }

//   render() {
//     console.log("in render indexToShow is " + this.state.indexToShow);

//     return (
//       <main>
//         <h1 className="heading">
//           <span>/</span>Reviews
//         </h1>

//         <FiChevronLeft
//           className="slide slide1"
//           onClick={() => this.btnClicked("left")}
//         />
//         <FiChevronRight
//           className=" slide slide2"
//           onClick={() => this.btnClicked("right")}
//         />
//         {this.state.indexToShow < this.state.people.length &&
//           this.state.indexToShow >= 0 && (
//             <section className="section">
//               <Review person={this.state.people[this.state.indexToShow]} />
//             </section>
//           )}
//       </main>
//     );
//   }
// }

export default App;
