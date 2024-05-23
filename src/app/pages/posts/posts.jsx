import { Post } from "./components/post";
import { List } from "./components/list";

const Posts = () => (
  <List>
    <Post author="herno" body="A post from Herno" key="1" />
    <Post author="maxi" body="A post from maxi" key="2" />
  </List>
);

export { Posts };
