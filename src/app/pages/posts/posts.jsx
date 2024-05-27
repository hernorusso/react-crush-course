import { useState } from "react";
import { Post, List, NewPost } from "./components";
import { Modal } from "../components";

const Posts = ({ isPosting, onNewPostBackgrondClickHandler }) => {
  const [postBody, setPostBody] = useState("");
  const [postAuthor, setPostAuthor] = useState("");

  const changeBodyHandler = (event) => {
    setPostBody(event.target.value);
  };
  const changeAuthorHandler = (event) => {
    setPostAuthor(event.target.value);
  };

  return (
    <>
      {isPosting && (
        <Modal onModalBackgrondClick={onNewPostBackgrondClickHandler}>
          <NewPost
            onChangeBody={changeBodyHandler}
            onChangeAuthor={changeAuthorHandler}
          />
        </Modal>
      )}
      <List>
        <Post author={postAuthor} body={postBody} key="1" />
        <Post author="maxi" body="A post from maxi" key="2" />
      </List>
    </>
  );
};

export { Posts };
