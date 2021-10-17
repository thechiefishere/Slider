import { FaQuoteRight } from "react-icons/fa";

const Review = ({ person }) => {
  return (
    <article key={person.id}>
      <img className="img" src={person.image} alt={person.alt} />
      <h2 className="name">{person.name}</h2>
      <h3 className="title">{person.title}</h3>
      <p className="quote">{person.quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};

export default Review;
