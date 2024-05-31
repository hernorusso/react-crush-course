import { Link } from 'react-router-dom';
import styles from './post.module.css';

const Post = ({ author, body, id }) => {
  return (
    <div className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </div>
  );
};

export { Post };
