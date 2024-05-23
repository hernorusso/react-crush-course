import styles from "./modal.module.css";
const Modal = ({ children }) => (
  <div className={styles.backdrop}>
    <dialog open className={styles.modal}>
      {children}
    </dialog>
  </div>
);

export { Modal };
