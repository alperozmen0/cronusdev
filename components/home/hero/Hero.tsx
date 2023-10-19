import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { OutlineButton } from "../../buttons/OutlineButton";
import ReactTypingEffect from 'react-typing-effect';
export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Selam, Ben Cronus<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span><ReactTypingEffect
              text={["Racist.", "9/11 Pilot.", "Pro Youtuber."]}
              speed={40}
              eraseSpeed={40}
              eraseDelay={900}
              typingDelay={300}
            /></span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            31 cekmeyi severim
            <br />
            Let&apos;s connect!
          </p>
        </Reveal>
        <Reveal>
          <OutlineButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </OutlineButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
