"use client";
import data from "./[competitionsId]/competitions.js";
import React from "react";
import Button from "../components/Button";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Image from "next/image.js";

export default function competitions() {
  useGSAP(() => {
    gsap.fromTo(".main", {opacity: 0}, {opacity: 1, duration: 1});
  });

  const registerColers: any = {
    "true": "text-green-400",
    "false": "text-red-700",
  };
  data.forEach((v) => console.log(v.banner));
  const competitions = data.map((v) => (
    <div
      className="flex  flex-col border border-white rounded-xl p-5 items-center "
      key={v.id}
    >
      <div className="flex items-center flex-col gap-3">
        <div className="w-full h-24">
          <Image
            className="rounded-xl object-cover w-96 "
            src={v.banner}
            alt=""
          ></Image>{" "}
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className={`${registerColers[`${v?.register}`]}`}>
            {v.register ? "ثبت نام باز است" : "ثبت نام بسته است"}
          </div>
          <div
            className="flex flex-col items-center justify-center "
            key={v.id}
          >
            {v.register ? (
              <Button>
                <Link href={`/competitions/${v.id}`}>{v.title}</Link>
              </Button>
            ) : (
              <Button className="bg-gray-400">{v.title}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="main text-Regular w-full flex h-full items-center  flex-1 flex-col gap-5 md:overflow-y-auto">
      <div>مسابقات پیش رو </div>
      {competitions}
    </div>
  );
}
