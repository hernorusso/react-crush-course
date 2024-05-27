import styles from "./modal.module.css";
const stopClickPopagation = (e) => {
  e.stopPropagation();
};
const Modal = ({ children, onClose }) => (
  <div className={styles.backdrop} onClick={onClose}>
    <dialog open className={styles.modal} onClick={stopClickPopagation}>
      {children}
    </dialog>
  </div>
);

export { Modal };
