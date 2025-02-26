"use client";
import aboutImage from "@/public/images/about/1.jpg";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

function about() {
  useGSAP(() => {
    gsap.fromTo(".main", {opacity: 0}, {opacity: 1, duration: 1});
  });
  return (
    <div className="main flex h-full flex-1 gap-5 py-12 mx-5 about xs:flex-col text-Regular">
      <div className="w-1/4 h-full xs:w-full">
        <Image
          loading="lazy"
          src={aboutImage}
          className="object-cover rounded-l-Header xs:rounded-Header"
          alt=""
        />
      </div>
      <div className="flex flex-1 h-full px-12 text-center text-Font ">
        <div className="text-center my-auto">
          <h1 className="text-4xl">درباره ما</h1>
          <br />
          <p className="text-lg" dir="rtl">
            در دنیایی که هر لحظه، میدان نبردی برای برتری است، تنها یک باشگاه
            وجود دارد که می‌تواند مهارت‌های شما را به سطح بعدی برساند. با افتخار
            تقدیم می‌کنیم , باشگاه شمشیر بازی 360 درجه جایی که شمشیربازی از
            مهارت به هنر تبدیل می‌شود. هر ضربه، هر حرکت، و هر لحظه‌ تجلی‌گاهی
            از تعهد و تخصص ماست. بپیوندید به ما، جایی که قهرمانان شکل می‌گیرند و
            افسانه‌ها زاده می‌شوند
            <br />
            <span className="text-2xl">اینجا، هر ضربه، یک داستان است</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;
