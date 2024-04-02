import { PostCardContainer } from "../styles/post-card.css";

export default function PostCard({ to }) {
  return (
    <PostCardContainer to={to}>
        <p>Greetings from</p>
        <h2>Monument Valley</h2>
    </PostCardContainer>
  )
}