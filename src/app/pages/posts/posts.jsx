import { useState } from "react";
import { Post, List, NewPost } from "./components";
import { Modal } from "../components";

const Posts = ({ isPosting, onCloseNewPost }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onCloseNewPost}>
          <NewPost onClose={onCloseNewPost} />
        </Modal>
      )}
      <List>
        <Post author="maxi" body="A post from maxi" key="2" />
      </List>
    </>
  );
};

export { Posts };
