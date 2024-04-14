import styles from "./styles/info.module.scss";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headers}>
        <div className={styles.chosen}>Описание</div>
        <div>Съемочная группа</div>
        <div>Информация</div>
      </div>
      <div className={styles.info}>
        Прекрасная планета Пандорра по-прежнему похожа на рай, где нашел себе
        приют бывший солдат Салли. Подрастают дети его нового народа, они играют
        на морских рифах и в подводном царстве. Кроме подростков на’ви на
        Пандорре растет и земной ребенок Джек Чемпион. Воскресают те, кто умер в
        былых сражениях: героиня Сигурни Уивер и зловещий полковник. Наконец, и
        земные корпорации снова предъявляют свои права на богатства Пандорры.
        Независимость фантастического первобытного рая придется отстаивать всем,
        кто его населяет.
      </div>
      <div className={styles.attention}>
        <svg
          className={styles.svgIcon}
          width="45"
          height="44"
          viewBox="0 0 45 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.8093 42C25.4153 42.0034 27.9962 41.4876 30.4038 40.4823C32.8114 39.477 34.9982 38.002 36.8385 36.142C38.6836 34.2869 40.1469 32.0826 41.1442 29.6556C42.1415 27.2287 42.6532 24.627 42.6498 22C42.6531 19.3731 42.1414 16.7714 41.1441 14.3444C40.1468 11.9175 38.6836 9.71312 36.8385 7.85802C34.9982 5.99804 32.8114 4.52302 30.4038 3.5177C27.9962 2.51239 25.4153 1.99661 22.8093 2.00002C20.2033 1.99667 17.6224 2.51247 15.2148 3.51778C12.8072 4.52309 10.6204 5.99809 8.78005 7.85802C6.93496 9.71312 5.47172 11.9175 4.47443 14.3444C3.47713 16.7714 2.96544 19.3731 2.96877 22C2.96539 24.627 3.47705 27.2287 4.47435 29.6556C5.47165 32.0826 6.93491 34.2869 8.78005 36.142C10.6204 38.0019 12.8072 39.4769 15.2148 40.4823C17.6224 41.4876 20.2033 42.0034 22.8093 42Z"
            stroke="#4B4B4B"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.8082 35C23.4659 35 24.0968 34.7366 24.5619 34.2678C25.027 33.7989 25.2883 33.163 25.2883 32.5C25.2883 31.837 25.027 31.2011 24.5619 30.7322C24.0968 30.2634 23.4659 30 22.8082 30C22.1504 30 21.5196 30.2634 21.0545 30.7322C20.5894 31.2011 20.3281 31.837 20.3281 32.5C20.3281 33.163 20.5894 33.7989 21.0545 34.2678C21.5196 34.7366 22.1504 35 22.8082 35Z"
            fill="#4B4B4B"
          />
          <path
            d="M22.8086 10V26"
            stroke="#4B4B4B"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div>
          Контент может содержать сцены курения и употребления спиртных
          напитков. Курение и чрезмерное употребление алкоголя вредит вашему
          здоровью.
        </div>
      </div>
    </div>
  );
};

export default Info;
