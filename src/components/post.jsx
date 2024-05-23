import styles from "./post.module.css";

const Post = ({ author, body }) => {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </div>
  );
};

export { Post };
