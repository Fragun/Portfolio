import styles from "./Alert.module.scss"

export default function Alert({ message, onClose }) {
    return (
      <div className={`${styles.customAlert}`}>
        <p>{message}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    );
  };