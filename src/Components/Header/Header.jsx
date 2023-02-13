import React from "react";
import styles from "./styles.module.css";
import image1 from "../../assets/images/hero/1.webp";
import image2 from "../../assets/images/hero/2.webp";
import image3 from "../../assets/images/hero/3.webp";
import image4 from "../../assets/images/hero/4.webp";
import image5 from "../../assets/images/hero/5.webp";
import image6 from "../../assets/images/hero/6.jpg";
import image7 from "../../assets/images/hero/7.webp";
import image8 from "../../assets/images/hero/8.jpg";

function Header() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  return (
    <header className={styles.wrapper}>
      <div className={styles.cards}>
        {images.map((item, index) => {
          return <img className={styles.card} src={item} alt="Layer Slider" />;
        })}
      </div>
      <div className={styles.heading}>
        <h1 className={styles.h1}>Layer Slider</h1>
        <p>افزونه نهایی وردپرس برای ایجاد محتوای وب با طراحی زیبا و متحرک.</p>
      </div>
    </header>
  );
}

export default Header;
