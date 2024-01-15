/* eslint-disable react/prop-types */
import styles from "./Vehicles.module.css";

function Vehicles({ children }) {
    return <div className={`container ${styles.vehicles}`}>{children}</div>;
}

export default Vehicles;
