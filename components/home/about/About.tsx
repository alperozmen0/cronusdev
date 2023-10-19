import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="Hakkımda" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              <span>ULAN!</span> sanal magandayım , ifşalanmam , yıkılmam , ezilmem , bükülmem , sarsılmam , kayıtlara geçmiş 57 tane hakaret , 29 tane adam yaralama , 9 tane cinayet davam var , ileri derecede bipolarım istediğim kişiyi kolay bir şekilde intihara sürüklerim, kimse baş edemez , sanalın tek mafyası benim , sevdiğimi korurum , laf atanı ifşalarım , ailesine haciz getirtirim , baba parası yemem kendi paramı alın teriyle kazanır parayı karımla çatur çutur yerim, sicilim çok kabarık , 3 yıldız polisler tarafından aranıyorum , aşırı derecede karizmayım , insan anlamam , birinci vazifem kadınlardır , ne mutlu türkiyem sanal maganda
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
