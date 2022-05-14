import styles from "@/styles/ColorSlider.module.scss";
import ReactCompareImage from "react-compare-image";

function ColorSlider() {
  return (
    <div className={styles.colorBox}>
      <ReactCompareImage leftImage='/img1.webp' rightImage='/img2.webp' />;
    </div>
  );
}

export default ColorSlider;
