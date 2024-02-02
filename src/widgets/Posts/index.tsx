import { Post } from "@entities/Post";
import { IPost } from "@models/Post";
import { FixedSizeList as List } from "react-window";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import InfiniteLoader from "react-window-infinite-loader";

interface IPostsProps {
  posts: IPost[];
  fetchMoreData: () => void;
  isFetching: boolean;
}

function debounce(fn: () => void, ms: number): () => void {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, ms);
  };
}

export function Posts({ posts, fetchMoreData, isFetching }: IPostsProps) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const loadMoreItems = isFetching ? () => {} : fetchMoreData;

  useEffect(function () {
    const debouncedHandleResize = debounce(() => {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  function isItemLoaded(i: number) {
    return !(posts.length < 100) || i < posts.length;
  }

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={posts.length < 100 ? posts.length + 1 : posts.length}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <List
          height={dimensions.height - 80 - 69}
          itemCount={posts.length}
          itemSize={126}
          width={dimensions.width - 160}
          className={styles.postsWrapper}
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {({ index, style }) => {
            return <Post style={style} post={posts[index]} />;
          }}
        </List>
      )}
    </InfiniteLoader>
  );
}
