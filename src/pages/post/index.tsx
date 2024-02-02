import { useNavigate, useParams } from "react-router-dom";
import { useGetPostQuery } from "../../shared/api/apiSlice";
import { Button } from "@shared/ui/Button";

import styles from "./styles.module.scss";

function PostPage() {
  const navigate = useNavigate();
  const { postId } = useParams();

  const { data: post, isLoading, isError } = useGetPostQuery(postId);

  if (isLoading) return <div>Loading post...</div>;

  if (isError) return <div>Error loading post...</div>;

  function handleBack() {
    navigate(-1);
  }

  return (
    <div className={styles.postContainer}>
      <div className={styles.postBody}>
        <span className={styles.id}>Post {post.id}</span>
        <span className={styles.title}>{post.title}</span>
        <span className={styles.body}>{post.body}</span>
        <div className={styles.button}>
          <Button onClick={handleBack}>Назад</Button>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
