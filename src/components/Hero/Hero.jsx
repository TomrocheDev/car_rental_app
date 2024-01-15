/* eslint-disable react/prop-types */
import styles from "./Hero.module.css";

function Hero({ children }) {
    return <div className={`container ${styles.hero}`}>{children}</div>;
}

export default Hero;
