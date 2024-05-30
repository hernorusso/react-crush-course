import { Outlet } from 'react-router-dom';
import { PostList } from './post-list';

const Posts = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
};

const loader = async () => {
  const response = await fetch('http://localhost:8080/posts');
  const { posts } = await response.json();
  return posts;
};

export { Posts, loader };
