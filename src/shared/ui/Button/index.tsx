import styles from "./styles.module.scss";
interface IButtonProps {
  children: JSX.Element | string;
  onClick: () => void;
}

export function Button({ children, onClick }: IButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
