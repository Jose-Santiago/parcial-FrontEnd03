import styles from "../styles/Card.module.css";
const Card = ({ nombre, lenguaje }) => {
  return (
    <div className={styles.card}>
      <h2>Muchas gracias por registrarte {nombre}!!!</h2>
      <h3>Tu Color favorito es:</h3>
      <div className={styles.respuesta}>{lenguaje}</div>
    </div>
  );
};

export default Card;
