/* eslint-disable react/prop-types */
import { useCars } from "../../../context/carContext";
import styles from "./VehiclesListItem.module.css";

function VehiclesListItem({ car }) {
    const { carId, onChangeCarId } = useCars();

    return (
        <li
            className={styles.listItem}
            style={
                car.id === carId
                    ? { backgroundColor: "var(--color-hl--0)", color: "var(--color-text--2)" }
                    : {}
            }
            onClick={() => onChangeCarId(car.id)}>
            {car.name}
        </li>
    );
}

export default VehiclesListItem;
