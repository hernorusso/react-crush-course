import { useLoaderData } from 'react-router-dom';
import { Post, List } from './components';

const PostList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <List>
          {posts.map(({ author, body, id }) => (
            <Post author={author} body={body} key={id} id={id} />
          ))}
        </List>
      )}
      {posts.length === 0 && (
        <div style={{ color: 'white', textAlign: 'center' }}>
          <h2>There are no post yet!</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export { PostList };
