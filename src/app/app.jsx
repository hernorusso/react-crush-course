import { Post } from "../components/post";
import { List } from "../components/list";

function App() {
  return (
    <main>
      <List>
        <Post author="herno" body="A post from Herno" key="1" />
        <Post author="maxi" body="A post from maxi" key="2" />
      </List>
    </main>
  );
}

export { App };
