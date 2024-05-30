import { Link, Form, redirect } from 'react-router-dom';
import { Modal } from '../components';
import styles from './new-post.module.css';

const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={styles.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

const action = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });

  return redirect('/');
};

export { NewPost, action };
