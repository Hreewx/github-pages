import { Posts } from "@widgets/Posts";
import { useGetPostsQuery } from "@shared/api/apiSlice";
import { useState } from "react";

import styles from "./styles.module.scss";

export function Home() {
  const [postQuery, setPostQuery] = useState({ limit: 10, start: 0 });
  const {
    data: posts,
    isLoading,
    isError,
    isFetching,
  } = useGetPostsQuery({ limit: postQuery.limit, start: postQuery.start });

  function fetchMoreData() {
    if (postQuery.start + 10 < 100)
      setPostQuery({
        limit: postQuery.limit + 10,
        start: postQuery.start + 10,
      });
  }

  if (!posts) return <div>No posts found</div>;

  if (isLoading) return <div>Loading posts...</div>;

  if (isError) return <div>Error loading posts...</div>;

  return (
    <div className={styles.container}>
      <h1>Posts with RTK Query Github</h1>
      <Posts
        fetchMoreData={fetchMoreData}
        isFetching={isFetching}
        posts={posts}
      />
    </div>
  );
}
