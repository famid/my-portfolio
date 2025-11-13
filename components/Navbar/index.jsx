import { useState } from 'react';
import Link from 'next/link';
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
    const [menuOpen, SetMenuOpen] = useState(false);

    const closeMenu = () => {
        if (!menuOpen) {
            SetMenuOpen(menuOpen);
            menuOpen = true;
        }
        else {
            SetMenuOpen(!menuOpen);
            menuOpen = false;
        }
    }

    return (
        <header className={`py-3 px-2 flex justify-between items-center flex-wrap lg:py-7 ${styles.header} ${menuOpen ? `${styles.open}` : ""}`}>
            <div className="z-50">
                <h2 className="text-2xl text-white font-bold">
                    <Link href="/">
                        <a title="Ahsanul Hoque Famid">Ahsanul Hoque Famid</a>
                    </Link>
                </h2>
            </div>
            <nav>
                <ul
                    className={`menu hidden absolute left-0 top-0 m-0 py-20 pt-16 px-4 bg-black z-40 w-full h-52 sm:w-unset sm:h-auto sm:bg-transparent sm:flex sm:py-0 sm:static sm:left-unset sm:top-unset ${styles.menu} ${menuOpen ? `${styles.open}` : ""}`}>
                    <li className="mb-4 mt-2 mx-0 sm:mb-0 sm:mt-0 sm:mx-3" title="Experiences">
                        <Link href="/#experiences">
                            <a className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-sky-400" onClick={() => closeMenu()}>
                                Experiences
                            </a>
                        </Link>
                    </li>
                    <li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Skills">
                        <Link href="/#skills">
                            <a className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-sky-400" onClick={() => closeMenu()}>
                                Skills
                            </a>
                        </Link>
                    </li>
                    <li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Projects">
                        <Link href="/#projects">
                            <a className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-sky-400" onClick={() => closeMenu()}>
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Blog">
                        <Link href="/#blog">
                            <a className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-sky-400" onClick={() => closeMenu()}>
                                Blog
                            </a>
                        </Link>
                    </li>
                    <li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Certifications">
                        <Link href="/#certifications">
                            <a className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-sky-400" onClick={() => closeMenu()}>
                                Certifications
                            </a>
                        </Link>
                    </li>
                    <li className="mb-4 mx-0 sm:mb-0 sm:mx-3" title="Contact">
                        <Link href="/#contact">
                            <a className="text-1xs text-white font-semibold ease-in-out duration-150 hover:text-sky-400" onClick={() => closeMenu()}>
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div 
                className={`z-50 flex flex-col justify-center items-center sm:hidden ${styles.hamburger} ${menuOpen ? `${styles.open}` : ""}`} 
                onClick={() => SetMenuOpen(!menuOpen)}>
                <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
                <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
                <span className="h-0.5 w-7 mb-1.5 bg-white"></span>
            </div>
        </header>
  )
}

export default Navbar;