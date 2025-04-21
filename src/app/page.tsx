import ParallaxSection from "@/components/Parallax/Section/parallaxSection";
import styles from "./page.module.scss";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {Array.from({ length: 10 }, (_, i) => (
          <ParallaxSection key={i} params={{ i }} />
        ))}
      </main>
    </div>
  );
}
