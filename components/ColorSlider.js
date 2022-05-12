import styles from "@/styles/ColorSlider.module.scss";
import ReactCompareImage from "react-compare-image";

function ColorSlider() {
  return (
    <div className={styles.colorBox}>
      <ReactCompareImage leftImage='/img1.jpg' rightImage='/img2.jpg' />;
    </div>
  );
}

export default ColorSlider;
