import { useState, useEffect } from 'react';
import { Post, List } from './components';

const PostList = ({ isPosting, onClosePostModal }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const { posts } = await response.json();
      setPosts(posts);
      setIsFetching(false);
    };
    fetchPost();
  }, []);

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
      {!isFetching && posts.length > 0 && (
        <List>
          {posts.map(({ author, body }) => (
            <Post author={author} body={body} key={body} />
          ))}
        </List>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ color: 'white', textAlign: 'center' }}>
          <h2>There are no post yet!</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ color: 'white', textAlign: 'center' }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export { PostList };
