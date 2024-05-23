import styles from "./list.module.css";

const List = ({ children }) => {
  const listItems = children.map((child) => <li key={child.key}>{child}</li>);
  return <ul className={styles.list}>{listItems}</ul>;
};

export { List };
