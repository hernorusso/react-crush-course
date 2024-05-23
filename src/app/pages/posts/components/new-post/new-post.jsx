import classes from "./new-post.module.css";

const NewPost = ({ onChangeBody, onChangeAuthor }) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onChangeBody} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" onChange={onChangeAuthor} required />
      </p>
    </form>
  );
};

export { NewPost };
