import styles from "./VehiclesHeader.module.css";

function VehiclesHeader() {
    return (
        <div className={styles.vehiclesHeader}>
            <h3>Vehicle Models</h3>
            <h2>Our Rental Fleet</h2>
            <p>
                Choose from a variety of our amazing vehicles to rent for your next adventure or
                business trip
            </p>
        </div>
    );
}

export default VehiclesHeader;
