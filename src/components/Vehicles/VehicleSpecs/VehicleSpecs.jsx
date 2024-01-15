/* eslint-disable react/prop-types */
import styles from "./VehicleSpecs.module.css";
import { useCars } from "../../../context/carContext";

function VehicleSpecs() {
    const { activeCar } = useCars();
    const { pricePerDay, model, brand, year, doors, ac, transmission, fuel } = activeCar;

    return (
        <div className={styles.vehicleSpecs}>
            <div>
                <div className={styles.header}>
                    <span className={styles.price}>${pricePerDay}</span> /rent per day
                </div>
                <div className={styles.specs}>
                    <div className={styles.specsRow}>
                        <span className={styles.specsCol}>Model</span>
                        <span className={styles.specsCol}>{model}</span>
                    </div>
                    <div className={styles.specsRow}>
                        <span className={styles.specsCol}>Brand</span>
                        <span className={styles.specsCol}>{brand}</span>
                    </div>
                    <div className={styles.specsRow}>
                        <span className={styles.specsCol}>Year</span>
                        <span className={styles.specsCol}>{year}</span>
                    </div>
                    <div className={styles.specsRow}>
                        <span className={styles.specsCol}>Doors</span>
                        <span className={styles.specsCol}>{doors}</span>
                    </div>
                    <div className={styles.specsRow}>
                        <span className={styles.specsCol}>AC</span>
                        <span className={styles.specsCol}>{ac ? "Yes" : "No"}</span>
                    </div>
                    <div className={styles.specsRow}>
                        <span className={styles.specsCol}>Transmission</span>
                        <span className={styles.specsCol}>{transmission}</span>
                    </div>
                    <div className={styles.specsRow}>
                        <span className={styles.specsCol}>Fuel</span>
                        <span className={styles.specsCol}>{fuel}</span>
                    </div>
                </div>
            </div>
            <a href="#" role="button">
                Reserve now
            </a>
        </div>
    );
}

export default VehicleSpecs;
