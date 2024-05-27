import styles from "./new-post.module.css";

const NewPost = ({ onChangeBody, onChangeAuthor, onCancel }) => {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onChangeBody} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" onChange={onChangeAuthor} required />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export { NewPost };
