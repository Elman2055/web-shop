import styles from "./RunningLine.module.css";

const RunningLine = () => {
  const words = [
    { id: 1, text: "ИНФОРМАЦИОННЫЕ" },
    { id: 2, text: "ЭЛЕКТРОННАЯ КОММЕРЦИЯ" },
    { id: 3, text: "СОЦИАЛЬНЫЕ СЕТИ" },
    { id: 4, text: "ОБРАЗОВАНИЕ" },
    { id: 5, text: "ИНФОРМАЦИОННЫЕ" },
    { id: 6, text: "ЭЛЕКТРОННАЯ КОММЕРЦИЯ" },
    { id: 7, text: "СОЦИАЛЬНЫЕ СЕТИ" },
    { id: 8, text: "ОБРАЗОВАНИЕ" },
  ];

  return (
    <div>
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          {words.map((el) => (
            <p key={el.id}>{el.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunningLine;
