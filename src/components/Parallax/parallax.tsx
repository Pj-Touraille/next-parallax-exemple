"use client";

import { useParallax } from "react-scroll-parallax";
import styles from "./parallax.module.scss";

export default function ParallaxComponent({ params, className, style, children }: {
    params: object, 
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode
}) {
    const { ref } = useParallax<HTMLDivElement>(params);

    return (
        <div ref={ref} className={`${styles.parallax} ${className}`} style={style}>
            {children}
        </div>
    );
}
