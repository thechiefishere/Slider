import { FaQuoteRight } from "react-icons/fa";

const Review = ({ person }) => {
  return (
    <article key={person.id}>
      <img src={person.image} alt={person.alt} />
      <h2>{person.name}</h2>
      <h3>{person.title}</h3>
      <p>{person.quote}</p>
      <FaQuoteRight />
    </article>
  );
};

export default Review;
