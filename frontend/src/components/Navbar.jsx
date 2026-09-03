import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <NavLink to="/">
                    <img
                        src={logo}
                        alt="Clinic Finder logo"
                        className={styles.logo}
                    />
                </NavLink>

                <div className={styles.links}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        Find a Provider
                    </NavLink>

                    <NavLink
                        to="/resources"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        Resources
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        About
                    </NavLink>
                </div>

                <div className={styles.menuWrap}>
                    <button
                        className={styles.menuButton}
                        aria-label="Open navigation menu"
                        aria-expanded={open}
                        onClick={() => setOpen((s) => !s)}
                    >
                        <span className={styles.menuLine} />
                        <span className={styles.menuLine} />
                        <span className={styles.menuLine} />
                    </button>

                    <div className={`${styles.dropdown} ${open ? styles.open : ""}`}>
                        <div className={styles.dropdownMenu}>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            }
                            onClick={() => setOpen(false)}
                        >
                            Find a Provider
                        </NavLink>

                        <NavLink
                            to="/resources"
                            className={({ isActive }) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            }
                            onClick={() => setOpen(false)}
                        >
                            Resources
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            }
                            onClick={() => setOpen(false)}
                        >
                            About
                        </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

