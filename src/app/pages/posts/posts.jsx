import { Outlet } from 'react-router-dom';
import { PostList } from './post-list';

const Posts = () => {
  return (
    <>
      <Outlet />
      <PostList />
    </>
  );
};

export { Posts };
