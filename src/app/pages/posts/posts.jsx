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
      {posts.length > 0 && (
        <List>
          {posts.map(({ author, body }) => (
            <Post author={author} body={body} key={body} />
          ))}
        </List>
      )}
      {posts.length === 0 && (
        <div style={{ color: "white", textAlign: "center" }}>
          <h2>There are no post yet!</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export { Posts };
