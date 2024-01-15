import styles from "./NavLinks.module.css";

function NavLinks() {
    return (
        <ul className={styles.navLinks}>
            <li>home</li>
            <li>about</li>
            <li>vehicle models</li>
            <li>testimonials</li>
            <li>our team</li>
            <li>contact</li>
        </ul>
    );
}

export default NavLinks;
