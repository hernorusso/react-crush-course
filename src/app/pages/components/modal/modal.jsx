import { useNavigate } from 'react-router-dom';

import styles from './modal.module.css';

const stopClickPopagation = (e) => {
  e.stopPropagation();
};

const Modal = ({ children }) => {
  const navigateTo = useNavigate();

  const onClick = () => {
    navigateTo('..');
  };

  return (
    <div className={styles.backdrop} onClick={onClick}>
      <dialog open className={styles.modal} onClick={stopClickPopagation}>
        {children}
      </dialog>
    </div>
  );
};

export { Modal };
