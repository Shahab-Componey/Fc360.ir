"use client";
import React from "react";
import Button from "../components/Button";
import Link from "next/link";
import data from "./[competitionsId]/competitions.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function competitions() {
  useGSAP(() => {
    gsap.fromTo(".main", {opacity: 0}, {opacity: 1, duration: 1});
  });
  const datas = data.map((v) => (
    <div
      className="flex flex-col items-center justify-center gap-2 my-5"
      key={v.id}
    >
      {v.id}

      <Button>
        <Link href={`/competitions/${v.id}`}>{v.title}</Link>
      </Button>
    </div>
  ));
  return (
    <div className="main text-Regular flex justify-center flex-col items-center h-full gap-5">
      <div>مسابقات در جریان </div>
      <div>{datas}</div>
      <div></div>
    </div>
  );
}
