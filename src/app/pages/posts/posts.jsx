import { Post, List, NewPost } from "./components";

const Posts = () => (
  <>
    <NewPost />
    <List>
      <Post author="herno" body="A post from Herno" key="1" />
      <Post author="maxi" body="A post from maxi" key="2" />
    </List>
  </>
);

export { Posts };
