"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import styles from "./parallaxSection.module.scss";

export default function ParallaxSection({ params }: { params: object }) {
    const { i } = params as { i: number };

    // const sectionStyle = i % 2 ? styles.section_small : styles.section_large

    return (
        // <section className={`${sectionStyle} ${styles.section}`} style={{ backgroundColor: `hsl(${i * 36}, 100%, 50%)` }}>
        <section className={styles.section} style={{ backgroundColor: `hsl(${i * 36}, 100%, 50%)` }}>
            <div className={styles.scrollingBackground}>
                {Array.from({ length: 30 }, (_, i) => (
                    <h1 key={i}>Scrolling background</h1>
                ))}
            </div>

            <div className={styles.container}>
                <div className={styles.staticBackground}>
                    {Array.from({ length: 10 }, (_, i) => (
                        <h1 key={i}>Static background</h1>
                    ))}
                </div>

                <ParallaxBanner className={styles.banner}>
                    {/* Layer 1 (white rectangle) starts hidden on the left and slide to hide on the right */}
                    <ParallaxBannerLayer className={`${styles.layer} ${styles.layer1}`} translateX={[-100, 100]} shouldAlwaysCompleteAnimation={true}>
                        <div className={styles.layerContent}>
                            <h1>parallax layer 1</h1>
                        </div>
                    </ParallaxBannerLayer>

                    {/* Layer 2 (mid-sized brown-gold band) starts full width and slide to hide on the left */}
                    <ParallaxBannerLayer className={`${styles.layer} ${styles.layer2}`} translateX={[0, -100]} shouldAlwaysCompleteAnimation={true}>
                        <div className={styles.layerContent}>
                            <h1>parallax layer 2</h1>
                        </div>
                    </ParallaxBannerLayer>
                </ParallaxBanner>

                <div className={styles.staticContent}>
                    <div className={styles.content}>
                        <h1>Static content</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}