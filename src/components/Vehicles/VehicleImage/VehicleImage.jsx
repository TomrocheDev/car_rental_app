/* eslint-disable react/prop-types */
import styles from "./VehicleImage.module.css";
import { useCars } from "../../../context/carContext";

function VehicleImage() {
    const { activeCar } = useCars();

    return (
        <div className={styles.imgContainer}>
            <img src={activeCar.img} alt={activeCar.name} />
        </div>
    );
}

export default VehicleImage;
