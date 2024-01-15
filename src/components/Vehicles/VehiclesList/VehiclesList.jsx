/* eslint-disable react/prop-types */
import { useCars } from "../../../context/carContext";
import styles from "./VehiclesList.module.css";
import VehiclesListItem from "../VehiclesListItem/VehiclesListItem";

function VehiclesList() {
    const { cars } = useCars();

    return (
        <ul className={styles.vehiclesList}>
            {cars.map((car) => (
                <VehiclesListItem car={car} key={car.id} />
            ))}
        </ul>
    );
}

export default VehiclesList;
