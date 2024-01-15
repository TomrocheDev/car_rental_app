/* eslint-disable react/no-unescaped-entities */
import styles from "./StepsSection.module.css";

function StepsSection() {
    return (
        <div className={`container ${styles.steps}`} id="steps">
            <h3>Plan you trip now</h3>
            <h2>Quick & easy car rental</h2>
            <div className={styles.stepContainer}>
                <div className={styles.step}>
                    <div className={styles.stepImageContainer} id={styles.imgOne}>
                        <img src="/svgs/car with checkmark.svg" alt="Car with checkmark" />
                    </div>
                    <h3>Select car</h3>
                    <p>
                        We offer a big range of cars. We have the perfect car for you that meets all
                        your needs.
                    </p>
                </div>
                <div className={styles.step}>
                    <div className={styles.stepImageContainer} id={styles.imgTwo}>
                        <img src="/svgs/operator.svg" alt="Operator" />
                    </div>
                    <h3>Contact Operator</h3>
                    <p>
                        Our knowledgeable and friendly operators are always ready to help with any
                        questions or concerns.
                    </p>
                </div>
                <div className={styles.step}>
                    <div className={styles.stepImageContainer} id={styles.imgThree}>
                        <img src="/svgs/car-svgrepo-com.svg" alt="car driving right" />
                    </div>
                    <h3>Make your trip!</h3>
                    <p>
                        Whether you're hitting the open road, we've got you covered with our wide
                        range of cars
                    </p>
                </div>
            </div>
        </div>
    );
}

export default StepsSection;
