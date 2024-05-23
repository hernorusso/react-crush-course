import { useState } from "react";
import classes from "./new-post.module.css";

const NewPost = () => {
  const [postBody, setPostBody] = useState("");
  const changeBodyHandler = (event) => {
    setPostBody(event.target.value);
  };

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{postBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
};

export { NewPost };
