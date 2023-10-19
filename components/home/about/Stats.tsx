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
<div>
  <span className="chip">Incredible!</span>
  <span className="chip">However,</span>
  <span className="chip">if</span>
  <span className="chip">your</span>
  <span className="chip">energy</span>
  <span className="chip">in</span>
  <span className="chip">your</span>
  <span className="chip">pseudo-mind</span>
  <span className="chip">is</span>
  <span className="chip">not</span>
  <span className="chip">conducive</span>
  <span className="chip">or,</span>
  <span className="chip">yeah,</span>
  <span className="chip">I</span>
  <span className="chip">like</span>
  <span className="chip">the</span>
  <span className="chip">word</span>
  <span className="chip">conducive</span>
  <span className="chip">to</span>
  <span className="chip">what</span>
  <span className="chip">I'm</span>
  <span className="chip">saying</span>
  <span className="chip">or</span>
  <span className="chip">what</span>
  <span className="chip">I'm</span>
  <span className="chip">feeling,</span>
  <span className="chip">then</span>
  <span className="chip">there's</span>
  <span className="chip">incompatibility.</span>
  <span className="chip">So</span>
  <span className="chip">how</span>
  <span className="chip">do</span>
  <span className="chip">you</span>
  <span className="chip">know</span>
  <span className="chip">that?</span>
  <span className="chip">How</span>
  <span className="chip">do</span>
  <span className="chip">you</span>
  <span className="chip">fix</span>
  <span className="chip">that?</span>
  <span className="chip">Well,</span>
  <span className="chip">first</span>
  <span className="chip">you</span>
  <span className="chip">have</span>
  <span className="chip">to</span>
  <span className="chip">understand.</span>
  <span className="chip">You</span>
  <span className="chip">have</span>
  <span className="chip">to</span>
  <span className="chip">look</span>
  <span className="chip">at</span>
  <span className="chip">yourself</span>
  <span className="chip">and</span>
  <span className="chip">say,</span>
  <span className="chip">what</span>
  <span className="chip">kind</span>
  <span className="chip">of</span>
  <span className="chip">energy</span>
  <span className="chip">or</span>
  <span className="chip">what</span>
  <span className="chip">kind</span>
  <span className="chip">of</span>
  <span className="chip">pseudo</span>
  <span className="chip">power</span>
  <span className="chip">do</span>
  <span className="chip">I</span>
  <span className="chip">have</span>
  <span className="chip">to</span>
  <span className="chip">set</span>
  <span className="chip">my</span>
  <span className="chip">atmosphere?</span>
  <span className="chip">Woooooah,</span>
  <span className="chip">That's</span>
  <span className="chip">good.</span>
  <span className="chip">What</span>
  <span className="chip">kind</span>
  <span className="chip">of</span>
  <span className="chip">pseudo-energy</span>
  <span className="chip">do</span>
  <span className="chip">I</span>
  <span className="chip">have</span>
  <span className="chip">that</span>
  <span className="chip">I</span>
  <span className="chip">can</span>
  <span className="chip">create?</span>
</div>

          </div>
        </div>
      </Reveal>
    </div>
  );
};
