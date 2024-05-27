import styles from "./modal.module.css";
const stopClickPopagation = (e) => {
  e.stopPropagation();
};
const Modal = ({ children, onModalBackgrondClick }) => (
  <div className={styles.backdrop} onClick={onModalBackgrondClick}>
    <dialog open className={styles.modal} onClick={stopClickPopagation}>
      {children}
    </dialog>
  </div>
);

export { Modal };
