"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import styles from "./parallaxSection.module.scss";

export default function ParallaxSection({ params }: { params: object }) {
    const { i } = params as { i: number };

    return (
        <section className={styles.section} style={{ backgroundColor: `hsl(${i * 36}, 100%, 50%)` }}>
            <div className={styles.container}>
                <ParallaxBanner className={styles.banner}>
                    <ParallaxBannerLayer className={`${styles.layer} ${styles.layer1}`} translateX={[-100, 100]} shouldAlwaysCompleteAnimation={true} />
                    <ParallaxBannerLayer className={`${styles.layer} ${styles.layer2}`} translateX={[0, -100]} shouldAlwaysCompleteAnimation={true} />

                    <div className={styles.content}>
                        <h1>Parallax Section</h1>
                        <p>This is a parallax section.</p>
                    </div>
                </ParallaxBanner>
            </div>
        </section>
    );
}