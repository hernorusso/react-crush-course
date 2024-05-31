import { createBrowserRouter } from 'react-router-dom';

import { App } from './app';
import {
  NewPost,
  newPostAction,
  Posts,
  postLoader,
  PostDetails,
  postDetailLoader,
} from './app/pages';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postLoader,
        children: [
          { path: '/new-post', element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails />, loader: postDetailLoader },
        ],
      },
    ],
  },
]);

export { router };
