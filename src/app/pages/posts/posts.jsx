import { useState } from "react";
import { Post, List, NewPost } from "./components";
import { Modal } from "../components";

const Posts = ({ isPosting, onClosePostModal }) => {
  const [posts, setPosts] = useState([]);
  const addPostHandler = (post) => {
    setPosts((p) => [post, ...p]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onClosePostModal}>
          <NewPost onClose={onClosePostModal} onAddPost={addPostHandler} />
        </Modal>
      )}
      <List>
        <Post author="maxi" body="A post from maxi" key="2" />
      </List>
    </>
  );
};

export { Posts };
