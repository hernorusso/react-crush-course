import { useState } from "react";
import { Posts } from "./pages/posts";
import { Header } from "./header";

function App() {
  const [isPosting, setIsPosting] = useState(false);
  const createPostHandler = () => {
    setIsPosting(true);
  };

  const newPostBackgrondClickHandler = () => {
    setIsPosting(false);
  };

  return (
    <>
      <Header onCreatePost={createPostHandler} />
      <main>
        <Posts
          isPosting={isPosting}
          onNewPostBackgrondClickHandler={newPostBackgrondClickHandler}
        />
      </main>
    </>
  );
}

export { App };
