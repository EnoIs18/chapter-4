import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
const SinglePostPage = () => {
  const { postId } = useParams();

  const posts = useSelector((state) => state.posts.posts);

  const post = posts?.find((p) => p.id === Number(postId));
  return (
    <>
      <article>
        <Header />
        <p>{post.body}</p>
        <p className="postCredit">
          <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    </>
  );
};

export default SinglePostPage;
