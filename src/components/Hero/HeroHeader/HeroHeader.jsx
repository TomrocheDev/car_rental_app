import styles from "./HeroHeader.module.css";

function HeroHeader() {
    return (
        <header>
            <h3 className={styles.subheader}>Plan your trip!</h3>
            <h2 className={styles.header}>
                Save <span style={{ color: "var(--color-hl--0" }}>big</span> with our car rental
            </h2>
            <p className={styles.text}>
                Discover convenience and freedom on the road with our hassle-free car rentals.
                Choose your ride, hit the road, and make every journey memorable.
            </p>
            <div className={styles.buttons}>
                <a href="#book-car" className="btn btnFull" role="button">
                    book ride <img src="/images/check_with_circle.png" />
                </a>
                <a href="#steps" className="btn btnFullBlack" role="button">
                    learn more <img src="/images/arrow right.png" style={{ width: "15px" }} />
                </a>
            </div>
        </header>
    );
}

export default HeroHeader;
