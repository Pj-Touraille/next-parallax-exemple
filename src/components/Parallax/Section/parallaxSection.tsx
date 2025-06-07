"use client";

import { useRef } from "react";
import styles from "./parallaxSection.module.scss";
import ParallaxComponent from "../parallax";

export default function ParallaxSection({ params }: { params: object }) {
    const { i } = params as { i: number };

    const sectionHeight = 200 * (i % 2 ? 1 : 2);
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className={styles.section} style={{ backgroundColor: `hsl(${i * 36}, 100%, 50%)`, height: `${sectionHeight}vh` }}>
            <div className={styles.scrollingBackground}>
                {Array.from({ length: 30 }, (_, i) => (
                    <h1 key={i}>Scrolling background</h1>
                ))}
            </div>

            <div className={styles.parallaxContainer}>
                <ParallaxComponent
                    params={{
                        translateX: [`-${100 + i * 50}vw`, '0vw'],
                        shouldAlwaysCompleteAnimation: true,
                        targetElement: sectionRef.current || undefined,
                    }}
                    className={styles.fullHeightParallax}
                    style={{
                        width: `${200 + i * 50}vw`,
                    }}>
                    {Array.from({ length: 10 }, (_, i) => (
                        <h1 key={i}>Full height parallax</h1>
                    ))}
                </ParallaxComponent>

                <ParallaxComponent
                    params={{
                        translateX: ['0vw', `-${100 + i * 50}vw`],
                        shouldAlwaysCompleteAnimation: true,
                        targetElement: sectionRef.current || undefined,
                    }}
                    className={styles.scrollingHorizontalParallax}
                    style={{
                        width: `${200 + i * 50}vw`,
                    }}>
                    <h1>Scrolling horizontal parallax</h1>
                </ParallaxComponent>

                <ParallaxComponent
                    params={{
                        translateY: [`-${50 * (i % 2 ? 1 : 2)}vh`, `${50 * (i % 2 ? 1 : 2)}vh`],
                        shouldAlwaysCompleteAnimation: true,
                        targetElement: sectionRef.current || undefined,
                    }}
                    className={styles.scrollingVerticalParallax}
                    style={{
                        height: `${sectionHeight}vh`,
                    }}>
                    <h1>Scrolling vertical parallax</h1>
                </ParallaxComponent>
            </div>

            <div className={styles.stickyContainer}>
                <div className={styles.stickyContainer}>
                    <div className={`${styles.sticky} ${styles.background}`}>
                        {Array.from({ length: 10 }, (_, i) => (
                            <h1 key={i}>Sticky background</h1>
                        ))}
                    </div>
                </div>

                <div className={styles.sticky}>
                    <div className={`${styles.parallaxContainer} ${styles.stickyContainer}`}>
                        <ParallaxComponent
                            params={{
                                translateX: ['0vw', `-${100 + i * 50}vw`],
                                shouldAlwaysCompleteAnimation: true,
                                targetElement: sectionRef.current || undefined,
                            }}
                            className={styles.stickyHorizontalParallax}
                            style={{
                                width: `${200 + i * 50}vw`,
                            }}>
                            <h1>Sticky horizontal parallax</h1>
                        </ParallaxComponent>

                        <ParallaxComponent
                            params={{
                                translateY: [`-${100 + 50 * (i % 2 ? 1 : 2)}vh`, `${100 + 50 * (i % 2 ? 1 : 2)}vh`],
                                shouldAlwaysCompleteAnimation: true,
                                targetElement: sectionRef.current || undefined,
                            }}
                            className={styles.stickyVerticalParallax}>
                            <h1>Sticky vertical parallax</h1>
                        </ParallaxComponent>
                    </div>
                </div>

                <div className={`${styles.sticky} ${styles.contentWrapper}`}>
                    <div className={styles.content}>
                        <h1>Sticky content</h1>
                    </div>
                </div>
            </div>
        </section >
    );
}