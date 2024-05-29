import { useState } from "react";
import { Posts } from "./pages/posts";
import { Header } from "./header";

function App() {
  const [isPosting, setIsPosting] = useState(false);
  const showNewPostModalHandler = () => {
    setIsPosting(true);
  };

  const hideNewPostModalHandler = () => {
    setIsPosting(false);
  };

  return (
    <>
      <Header onCreatePost={showNewPostModalHandler} />
      <main>
        <Posts
          isPosting={isPosting}
          onClosePostModal={hideNewPostModalHandler}
        />
      </main>
    </>
  );
}

export { App };
