import { useNavigate } from 'react-router-dom';

import styles from './modal.module.css';

const clickPopagationHandler = (e) => {
  e.stopPropagation();
};

const Modal = ({ children }) => {
  const navigateTo = useNavigate();

  const clickHandler = () => {
    navigateTo('..');
  };

  return (
    <div className={styles.backdrop} onClick={clickHandler}>
      <dialog open className={styles.modal} onClick={clickPopagationHandler}>
        {children}
      </dialog>
    </div>
  );
};

export { Modal };
