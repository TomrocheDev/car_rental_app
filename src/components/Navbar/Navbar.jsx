import Brand from "./Brand/Brand";
import NavLinks from "./NavLinks/NavLinks";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <Brand />
            <NavLinks />
            <div className={styles.navButtons}>
                <button className="btn btnTrans">sign in</button>
                <button className="btn btnFull">register</button>
            </div>
        </nav>
    );
}

export default Navbar;
