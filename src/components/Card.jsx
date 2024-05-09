import { CardWrapper, TextWrapper } from "../styles/card.css";
import PropTypes from "prop-types";

export default function Card({ to, src, title, desc }) {
  return (
    <CardWrapper to={to}>
        <img src={src} />
        <TextWrapper>
          <h2>{title}</h2>
          <p>{desc}</p>
        </TextWrapper>
    </CardWrapper>
  )
}

Card.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};
