import styles from "./Brand.module.css";

function Brand() {
    return (
        <div className={styles.brand}>
            <img src="../../public/svgs/car.svg" alt="Logo of a car" />
            <div className={styles.brandText}>
                <h1>
                    <span className={styles.brandTop}>car</span>
                    <span className={styles.brandBottom}>rental</span>
                </h1>
            </div>
        </div>
    );
}

export default Brand;
