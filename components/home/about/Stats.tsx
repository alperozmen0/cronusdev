import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { MdDevicesOther } from "react-icons/md"
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Usta Olduğum Diller </span>
          </h4>
          <div className={styles.statGrid}>
      <span className="chip">Brainfuck</span>
      <span className="chip">Malbolge</span>
      <span className="chip">Whitespace</span>
      <span className="chip">INTERCAL</span>
      <span className="chip">Ook!</span>
      <span className="chip">Shakespeare</span>
      <span className="chip">ArnoldC</span>
      <span className="chip">HQ9+</span>
      <span className="chip">Chef</span>
      <span className="chip">LOLCODE</span>
      <span className="chip">Brain-Flak</span>
<span className="chip">Befunge</span>
<span className="chip">Unlambda</span>
<span className="chip">Piet</span>
<span className="chip">Whitespace</span>
<span className="chip">LorcaCode</span>
<span className="chip">Cow</span>
<span className="chip">TrumpScript</span>
<span className="chip">HQ9++</span>
<span className="chip">Plankalkül</span>
<span className="chip">Flobot</span>

          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <MdDevicesOther size="2.4rem" color="var(--brand)" />
            <span>Others</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Linux</span>
            <span className="chip">Vs Code</span>
            <span className="chip">Git</span>
            <span className="chip">Github</span>
            <span className="chip">Vercel</span>
            <span className="chip">Netlify</span>
            <span className="chip">Railway</span>
            <span className="chip">Postman</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
