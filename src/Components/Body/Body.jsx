import React from "react";
import image from "../../assets/images/body-image.JPG";
import styles from "./styles.module.css";

function Body() {
  return (
    <main className={styles.wrapper}>
      <h2>قالب های چشمگیر</h2>
      <h3>برای هر نوع محتوا</h3>
      <p>دانلود قالب های قابل تنظیم برای شروع آسان. مجموعه وسیعی از اسلایدر، پاپ آپ، هیرو، اسکرول، و نمایش کامل وب سایت در دسترس است. با دقت و توجه به جزئیات از قبل ساخته شده است. فقط برای شما.</p>
      <img src={image} alt="Layer Slider" />
      <p>آیا برای تقویت وب سایت خود به ایده هایی نیاز دارید؟ آیا یک ضرب الاجل فوری دارید یا فقط افکار خلاقانه خود را از دست داده اید؟ LayerSlider در راه کمک است! الگوهای قابل تنظیم ما را مرور کنید تا دوباره الهام خود را پیدا کنید. هر یک از آنها را فقط با یک کلیک دانلود کنید و شروع به تحقق پروژه بعدی خود کنید.</p>
      <a className={styles.btn} href="https://layerslider.com/sliders/" target="_blank" rel="noreferrer">
        مشاهده پیش نمایش ها
      </a>
    </main>
  );
}

export default Body;
