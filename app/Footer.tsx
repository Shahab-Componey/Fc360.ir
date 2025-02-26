"use client";
import brandLogo from "../public/images/footer/BrandLogo.png";
import brandLogo2 from "../public/images/footer/BrandLogo2.png";
import brandLogo3 from "../public/images/footer/BrandLogo3.png";
import brandLogo4 from "../public/images/footer/BrandLogo4.png";
import image1 from "../public/images/footer/Telegram.png";
import image2 from "../public/images/footer/Twiiter.png";
import image3 from "../public/images/footer/Instagram.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex  items-center justify-between px-8 z-1 footer py-10  bg-Footer rounded-t-Header md:flex-col md:h-max md:gap-3 md:py-5 ">
      <div className="flex items-center gap-3 h-max md:flex-col ">
        <div className="flex shrink-0 md:w-20 justify-center">
          <Image className="md:size-12" src={brandLogo} alt="" />
          <Image className="md:size-12" src={brandLogo3} alt="" />
          <Image className="md:size-12" src={brandLogo4} alt="" />
          <Image className="md:size-12" src={brandLogo2} alt="" />
        </div>
        <div className="self-center text-Regular md:text-center"></div>
        
      </div>

      <div className="flex items-center justify-center gap-3 ">
        <SocialLink src={image1}></SocialLink>
        <SocialLink src={image2}></SocialLink>
        <SocialLink src={image3}></SocialLink>
      </div>
    </div>
  );
}

function SocialLink({src}: any) {
  return (
    <div
      className={`transition-all cursor-pointer size-12 hover:scale-110 md:size-8 `}
    >
      <a href="/">
        {" "}
        <Image src={src} alt="" />
      </a>
    </div>
  );
}

export default Footer;
