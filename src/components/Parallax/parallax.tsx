"use client";

import { useParallax } from "react-scroll-parallax";
import styles from "./parallax.module.scss";

export default function ParallaxComponent({ params, children }: { params: object, children?: React.ReactNode }) {
    const { ref } = useParallax<HTMLDivElement>(params);

    return (
        <div ref={ref} className={styles.parallax}>
            {children}
        </div>
    );
}
