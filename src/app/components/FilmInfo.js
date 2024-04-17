import Button from "./Button";
import Rating from "./Rating";
import styles from "./styles/filmInfo.module.scss";
const FilmInfo = ({ description }) => {
  return (
    <>
      <div className={styles.film}>
        <div
          className={`${styles.content} ${
            description ? styles.correctHeight : ""
          }`}
        >
          <div className={styles.name} />
          <div className={styles.tags}>
            <Rating value="7,9" fontSize="20px" />
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="white" fill-opacity="0.3" />
            </svg>

            <div>2024</div>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="white" fill-opacity="0.3" />
            </svg>
            <div>Фентези</div>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="white" fill-opacity="0.3" />
            </svg>
            <div>США</div>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="white" fill-opacity="0.3" />
            </svg>
            <div>16+</div>
          </div>
          {description && (
            <div className={styles.description}>
              Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг
              должен справиться с четырьмя стихиями и вступить в схватку
              с безжалостным противником, который пытается его остановить.
            </div>
          )}
          <div className={styles["mobile-hide"]}>
            <div className={styles["button-container"]}>
              <Button
                text={`${
                  description
                    ? "ㅤㅤㅤㅤСмотретьㅤㅤㅤㅤ"
                    : "ㅤㅤㅤㅤПодробнееㅤㅤㅤㅤ"
                }`}
                style={"gradient"}
              />
              <Button
                text={
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 0H2C0.897 0 0 0.897 0 2V20L8 15.428L16 20V2C16 0.897 15.103 0 14 0ZM14 16.553L8 13.125L2 16.553V2H14V16.553Z"
                      fill="#BABABA"
                    />
                  </svg>
                }
                style={"grey"}
              />
              <Button
                text={
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99998 1.59499C8.91038 0.593091 7.48419 0.0370339 6.00398 0.0369873C5.22052 0.037803 4.44495 0.193547 3.72192 0.495256C2.99888 0.796965 2.34265 1.23868 1.79098 1.79499C-0.562019 4.15799 -0.561019 7.85399 1.79298 10.207L9.12498 17.539C9.29498 17.838 9.62298 18.031 9.99998 18.031C10.1548 18.0295 10.3071 17.9917 10.4446 17.9207C10.5822 17.8496 10.7011 17.7473 10.792 17.622L18.207 10.207C20.561 7.85299 20.561 4.15799 18.205 1.79099C17.6536 1.2357 16.9979 0.794884 16.2756 0.49387C15.5532 0.192857 14.7785 0.0375869 13.996 0.0369873C12.5158 0.0372293 11.0897 0.59326 9.99998 1.59499ZM16.791 3.20499C18.354 4.77599 18.355 7.22999 16.793 8.79299L9.99998 15.586L3.20698 8.79299C1.64498 7.22999 1.64598 4.77599 3.20498 3.20899C3.96498 2.45299 4.95898 2.03699 6.00398 2.03699C7.04898 2.03699 8.03898 2.45299 8.79298 3.20699L9.29298 3.70699C9.38577 3.79993 9.49597 3.87367 9.61729 3.92398C9.7386 3.97429 9.86865 4.00019 9.99998 4.00019C10.1313 4.00019 10.2614 3.97429 10.3827 3.92398C10.504 3.87367 10.6142 3.79993 10.707 3.70699L11.207 3.20699C12.719 1.69799 15.281 1.70199 16.791 3.20499Z"
                      fill="#BABABA"
                    />
                  </svg>
                }
                style={"grey"}
              />
              <Button
                text={
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.2806 7.97033L13.7806 0.470332C13.6757 0.36538 13.5421 0.293873 13.3967 0.264856C13.2512 0.235838 13.1004 0.250613 12.9633 0.307311C12.8262 0.364009 12.709 0.460084 12.6265 0.583385C12.5441 0.706687 12.5 0.851677 12.4999 1.00002V4.78283C10.0681 4.99096 7.38213 6.18158 5.17244 8.05564C2.51182 10.3131 0.855255 13.2222 0.507443 16.2466C0.480263 16.4817 0.527938 16.7194 0.643684 16.9259C0.75943 17.1324 0.937349 17.2971 1.15212 17.3966C1.36689 17.496 1.60757 17.5253 1.83991 17.48C2.07225 17.4348 2.28441 17.3175 2.44619 17.1447C3.47744 16.0469 7.14682 12.5753 12.4999 12.2697V16C12.5 16.1484 12.5441 16.2934 12.6265 16.4167C12.709 16.54 12.8262 16.636 12.9633 16.6927C13.1004 16.7494 13.2512 16.7642 13.3967 16.7352C13.5421 16.7062 13.6757 16.6347 13.7806 16.5297L21.2806 9.02971C21.4208 8.88911 21.4996 8.69862 21.4996 8.50002C21.4996 8.30142 21.4208 8.11093 21.2806 7.97033ZM13.9999 14.1897V11.5C13.9999 11.3011 13.9209 11.1103 13.7803 10.9697C13.6396 10.829 13.4489 10.75 13.2499 10.75C10.6174 10.75 8.05338 11.4372 5.629 12.7938C4.39427 13.4877 3.24383 14.322 2.20057 15.28C2.74432 13.045 4.11494 10.9197 6.14276 9.19939C8.31963 7.35346 10.9765 6.25002 13.2499 6.25002C13.4489 6.25002 13.6396 6.171 13.7803 6.03035C13.9209 5.8897 13.9999 5.69893 13.9999 5.50002V2.81127L19.6896 8.50002L13.9999 14.1897Z"
                      fill="#BABABA"
                    />
                  </svg>
                }
                style={"grey"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["mobile-only"]}>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4.5" cy="4.5" r="4.5" fill="#9747FF" />
        </svg>
        <svg
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="4"
            cy="4.5"
            r="4"
            fill="url(#paint0_linear_4689_5473)"
            fill-opacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4689_5473"
              x1="4"
              y1="0.5"
              x2="4"
              y2="8.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.2" />
              <stop offset="0.5" stop-color="white" stop-opacity="0.25" />
              <stop offset="1" stop-color="white" stop-opacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="4"
            cy="4.5"
            r="4"
            fill="url(#paint0_linear_4689_5473)"
            fill-opacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4689_5473"
              x1="4"
              y1="0.5"
              x2="4"
              y2="8.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.2" />
              <stop offset="0.5" stop-color="white" stop-opacity="0.25" />
              <stop offset="1" stop-color="white" stop-opacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="4"
            cy="4.5"
            r="4"
            fill="url(#paint0_linear_4689_5473)"
            fill-opacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4689_5473"
              x1="4"
              y1="0.5"
              x2="4"
              y2="8.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.2" />
              <stop offset="0.5" stop-color="white" stop-opacity="0.25" />
              <stop offset="1" stop-color="white" stop-opacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default FilmInfo;
