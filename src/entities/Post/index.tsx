import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { IPost } from "@models/Post";
import { Button } from "@shared/ui/Button";

interface IPostProps {
  post: IPost;
  style: CSSProperties;
}

export function Post({ post, style }: IPostProps): JSX.Element {
  const navigate = useNavigate();
  const [overflowing, setOverflowing] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  function checkOverflow(element: React.RefObject<HTMLDivElement>) {
    if (element.current)
      return element?.current?.scrollWidth > element?.current?.offsetWidth;
  }

  function handleClick() {
    navigate(`/post/${post.id}`);
  }

  useEffect(
    function () {
      if (checkOverflow(ref)) {
        setOverflowing(true);
      } else {
        setOverflowing(false);
      }
    },
    [ref]
  );

  return (
    <div
      className={styles.postBody}
      style={{
        ...style,
        backgroundColor: post.id % 2 === 0 ? "#E7D3B0" : "#ADC2E6",
      }}
      ref={ref}
    >
      <span className={styles.id}>{post.id}</span>
      <span className={styles.title}>{post.title}</span>
      <span className={styles.body}>{post.body}</span>
      <div className={styles.button}>
        {overflowing ? <Button onClick={handleClick}>Посмотреть</Button> : ""}
      </div>
    </div>
  );
}
