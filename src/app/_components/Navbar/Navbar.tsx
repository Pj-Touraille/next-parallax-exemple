"use client";

import { useEffect, useState } from 'react';
import styles from './navbar.module.scss';

export default function Navbar() {
    const [isHidden, setIsHidden] = useState(true);

    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight) {
            setIsHidden(false);
        } else {
            setIsHidden(true);
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
        <nav className={styles.header} hidden={isHidden}>
            <h1>Header</h1>
        </nav>
    );
}