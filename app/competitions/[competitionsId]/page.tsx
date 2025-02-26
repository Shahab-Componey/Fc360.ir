import React from "react";
import competitions from "./competitions.js";
import Button from "@/app/components/Button.tsx";

export default async function page({params}: {params: any}) {
  const {competitionsId} = await params;
  const competition = competitions.find((v) => v.id == competitionsId);
  return (
    <div className="flex flex-col w-1/2 h-full text-white text-Regular mx-auto flex-1">
      <div className=""></div>
      {/* <div className="flex flex-col items-center justify-center my-5"> */}
      {/* <div className="flex flex-col items-center justify-center w-full h-full gap-5"> */}
      {/* <iframe
        className="flex w-1/2 h-auto "
        src={`${competition?.teaser}`}
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe> */}
      {/* <div className="text-4xl ">{competition?.title}</div>
          <p dir="rtl" className="w-1/2 text-lg text-center">
            {competition?.descrption}
          </p>
        </div>
      </div> */}
      <Form></Form>
    </div>
  );
}

function Form() {
  return (
    <iframe
      className="mx-auto my-auto bg-[#ffffff] rounded-xl w-full text-white"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfvbrfPHSBD6EAYfb1PqGR4lhmGMhd1rQ6T0atKzWxnneXHcw/viewform?embedded=true"
      width="700"
      height="520"
    >
      درحال بار کردن…
    </iframe>
  );
}
