import { useLoaderData } from 'react-router-dom';
import { Post, List } from './components';

const PostList = ({ isPosting, onClosePostModal }) => {
  const posts = useLoaderData();

  const addPostHandler = (post) => {
    // TODO: refactor this to an async function
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setPosts((p) => [post, ...p]);
  };

  return (
    <>
      {posts.length > 0 && (
        <List>
          {posts.map(({ author, body }) => (
            <Post author={author} body={body} key={body} />
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
