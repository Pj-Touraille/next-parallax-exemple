"use client";

import { useEffect, useState } from 'react';
import styles from './navbar.module.scss';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        console.log(window.scrollY);

        if (window.scrollY > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    // Attach the scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={styles.header} hidden={!isVisible}>
            <h1>Header</h1>
        </nav>
    );
}