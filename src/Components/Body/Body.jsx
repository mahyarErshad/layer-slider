import React from "react";
import image from "../../assets/images/body-image.JPG";
import styles from "./styles.module.css";

function Body() {
  return (
    <main className={`${styles.wrapper} flex-center`}>
      <div className="w-full max-w-[1200px] flex-center flex-col gap-4">
        <h2 className="text-[3rem] font-bold">قالب های چشمگیر</h2>
        <h3 className="font-semibold text-4xl">برای هر نوع محتوا</h3>
        <p className="mt-12 text-2xl">دانلود قالب های قابل تنظیم برای شروع آسان. مجموعه وسیعی از اسلایدر، پاپ آپ، هیرو، اسکرول، و نمایش کامل وب سایت در دسترس است. با دقت و توجه به جزئیات از قبل ساخته شده است. فقط برای شما.</p>
        <img src={image} alt="Layer Slider" />
        <p className="text-2xl mt-12">آیا برای تقویت وب سایت خود به ایده هایی نیاز دارید؟ آیا یک ضرب الاجل فوری دارید یا فقط افکار خلاقانه خود را از دست داده اید؟ LayerSlider در راه کمک است! الگوهای قابل تنظیم ما را مرور کنید تا دوباره الهام خود را پیدا کنید. هر یک از آنها را فقط با یک کلیک دانلود کنید و شروع به تحقق پروژه بعدی خود کنید.</p>
        <a className={styles.btn} href="https://www.rtl-theme.com/layerslider-wordpress-plugin/" target="_blank" rel="noreferrer">
          خرید نسخه حرفه ای
        </a>
      </div>
    </main>
  );
}

export default Body;
