import jameEthadCroped from "@/public/images/competitions/JamEtehadCroped.png";
import jamRamezanCroped from "@/public/images/competitions/JamRamezanCroped.png";

const competitions = [
  {
    id: 1,
    title: "مسابقات اپه آقایان - جام اتحاد",
    banner: jameEthadCroped,
    register: true,
    teaser:
      "https://www.aparat.com/v/tms20tt",
    descrption:
      "جام اتحاد فقط یک مسابقه نیست بلکه شروع یک مسیر به سمت موفقیت است یکی برای همه و همه برای یکی جام اتحاد اولین مسابقه آزاد رسمی است که با همکاری هیات شمشیر   بازی استان خوزستان و هیات شمشیر بازی منطقه آزاد اروند برگزار میشود .",
    time: "دهم اسفند ساعت ۱۰ صبح",
    location: "آبادان - باوارده جنوبی - سالن کوثر - سالن شمشیر بازی آبادان",
    rules: "alice@example.com",
    docsLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfvbrfPHSBD6EAYfb1PqGR4lhmGMhd1rQ6T0atKzWxnneXHcw/viewform?embedded=true",
  },
  {
    id: 2,
    title: "مسابقات سابر آقایان - جام رمضان",
    banner: jamRamezanCroped,
    register: false,
    teaser: "alice@example.com",
    descrption: "alice@example.com",
    rules: "alice@example.com",
    docsLink: "alice@example.com",
  },
];

export default competitions;
