import { FaQuoteRight } from "react-icons/fa";

const Review = ({ person }) => {
  return (
    <article>
      <img src={person.img} alt={person.alt} />
      <h2>{person.name}</h2>
      <h3>{person.title}</h3>
      <p>{person.quote}</p>
      <FaQuoteRight />
    </article>
  );
};

export default Review;
