import { useLoaderData, Link } from 'react-router-dom';

import { Modal } from '../common';
import styles from './post-details.module.css';

const PostDetails = () => {
  const post = useLoaderData();
  const { author, body } = post;

  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={styles.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </main>
    </Modal>
  );
};

const loader = async ({ params }) => {
  const response = await fetch('http://localhost:8080/posts/' + params.id);
  const { post } = await response.json();
  return post;
};

export { PostDetails, loader };
