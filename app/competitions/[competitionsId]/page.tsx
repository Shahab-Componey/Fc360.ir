"use client";
import React, {useState} from "react";
import competitions from "./competitions.js";
import Button from "@/app/components/Button.tsx";
import {useRouter} from "next/navigation";
import Image from "next/image.js";
import aparatLogo from "@/public/images/competitions/Aparat.png";

export default function page({params}: {params: any}) {
  const {competitionsId}: any = React.use(params);
  const competition = competitions.find((v) => v.id == competitionsId);
  const router = useRouter();
  const [form, setForm] = useState(false);
  if (!competition?.register) {
    router.push("/competitions");
    return null;
  }
  return (
    <div className="flex text-center h-full text-white  overflow-y-auto overflow-x-hidden ">
      {!form ? (
        <div className="flex flex-1 flex-col w-full  items-center justify-center px-5  my-auto  md:mx-0 ">
          <div>
            <div className="flex flex-col items-center justify-center w-full h-full gap-10 ">
              <div className="flex mx-auto w-full flex-col gap-5 h-full">
                <Image
                  className="rounded-3xl mx-auto object-cover h-52 "
                  src={competition.banner}
                  alt=""
                ></Image>

                <div className="flex flex-col text-center gap-5">
                  <div className="text-4xl ">{competition?.title}</div>
                  <Button
                    className="w-32 h-8   text-xl"
                    event={() => setForm(true)}
                  >
                    ثبت نام
                  </Button>
                  <div className="mx-auto">
                    <a href={competition.teaser} target="blank" className="">
                      <div className="flex items-center gap-1">
                        <div className="text-2xl  cursor-pointer">
                          مشاهده تیزر
                        </div>
                        <Image
                          className="size-10"
                          src={aparatLogo}
                          alt=""
                        ></Image>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex mx-auto ">
                  <div className="flex flex-col border rounded-xl p-5 ">
                    <p dir="rtl" className=" text-lg ">
                      زمان برگزاری : {competition?.time}
                    </p>
                    <p dir="rtl" className=" text-lg ">
                      محل برگزاری : {competition?.location}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/oSQSnNEhscKyt6ar7"
                      target="blank"
                      className=" text-blue-600"
                    >
                      <span>مشاهده در گوگل مپ</span>
                    </a>
                  </div>
                </div>

                <div className="mx-auto flex flex-col gap-5"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Form docsLink={competition?.docsLink}></Form>
      )}
    </div>
  );
}

function Form({docsLink}: any) {
  return (
    <iframe
      className="my-auto mx-auto  bg-[#ffffff] rounded-xl  text-white "
      src={`${docsLink}`}
      width="700"
      height="520"
      allowFullScreen={true}
    >
      درحال بار کردن…
    </iframe>
  );
}
