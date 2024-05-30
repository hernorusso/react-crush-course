import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../components';
import styles from './new-post.module.css';

const NewPost = ({ onClose, onAddPost }) => {
  const [postBody, setPostBody] = useState('');
  const [postAuthor, setPostAuthor] = useState('');

  const changeBodyHandler = (event) => {
    setPostBody(event.target.value);
  };
  const changeAuthorHandler = (event) => {
    setPostAuthor(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const post = {
      body: postBody,
      author: postAuthor,
    };
    onAddPost(post);
    onClose();
  };

  return (
    <Modal>
      <form className={styles.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            onChange={changeAuthorHandler}
            required
          />
        </p>
        <p className={styles.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
};

export { NewPost };
