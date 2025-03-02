"use client";
import activeData from "./activeCompetitions/[competitionsId]/activeCompetitions.js";
import pastData from "./pastCompomttions/[competitionsId]/pastCompomttions.js";
import React, {useEffect, useState} from "react";
import Button from "../components/Button";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Image from "next/image.js";
import {usePathname} from "next/navigation";

const registerColers: any = {
  true: "text-green-400",
  false: "text-red-700",
};
export default function page({params}: {params: any}) {
  useGSAP(() => {
    gsap.fromTo(".main", {opacity: 0}, {opacity: 1, duration: 1});
  });
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState<String>("");

  const activeCompetitions = activeData.map((v) => (
    <ActiveCompetitions key={v.id} data={v}></ActiveCompetitions>
  ));

  const pastCompetitions = pastData.map((v) => (
    <PastCompomttions key={v.id} data={v}></PastCompomttions>
  ));

  const [tab, setTab] = useState<React.ReactNode>();

  useEffect(() => {
    if (pathname.endsWith("/pastCompetitions")) {
      setTab(pastCompetitions);
      setActiveTab("pastCompetitions");
    } else if (
      pathname.endsWith("/activeCompetitions") ||
      pathname.endsWith("/competitions")
    ) {
      setTab(activeCompetitions);
      setActiveTab("activeCompetitions");
    }
  }, [pathname]);

  return (
    <div className="main text-Regular w-full flex h-full items-center  flex-1 flex-col gap-5 overflow-y-auto text-nowrap px-3">
      <div className="flex gap-5 flex-wrap items-center justify-center">
        <div
          className={`underline cursor-pointer ${
            activeTab === "pastCompetitions" ? "text-white" : "text-Regular"
          }`}
          onClick={() => {
            setTab(pastCompetitions);
            setActiveTab("pastCompetitions");
          }}
        >
          مسابقات گذشته{" "}
        </div>
        <div
          className={`underline cursor-pointer ${
            activeTab === "activeCompetitions" ? "text-white" : "text-Regular"
          }`}
          onClick={() => {
            setTab(activeCompetitions);
            setActiveTab("activeCompetitions");
          }}
        >
          مسابقات پیش رو{" "}
        </div>
      </div>
      {tab}
    </div>
  );
}

const PastCompomttions = React.memo(({data}: any) => {
  {
    return (
      <div className="flex  flex-col border border-white rounded-xl p-5 items-center ">
        <div className="flex items-center flex-col gap-3">
          <div className="w-full h-24">
            <Image
              className="rounded-xl object-cover w-96 "
              src={data.banner}
              alt=""
              loading="lazy"
            ></Image>{" "}
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className={`text-gray-400`}>به اتمام رسیده</div>
            <div className="flex flex-col items-center justify-center ">
              {data.active ? (
                <Button>
                  <Link href={`/competitions/pastCompomttions/${data.id}`}>
                    {data.title}
                  </Link>
                </Button>
              ) : (
                <Button className="bg-gray-400">{data.title}</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

const ActiveCompetitions = React.memo(({data}: any) => {
  return (
    <div className="flex  flex-col border border-white rounded-xl p-5 items-center ">
      <div className="flex items-center flex-col gap-3">
        <div className="w-full h-24">
          <Image
            className="rounded-xl object-cover w-96 "
            src={data.banner}
            alt=""
            loading="lazy"
          ></Image>{" "}
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className={`${registerColers[`${data?.active}`]}`}>
            {data.active ? "ثبت نام باز است" : "ثبت نام بسته است"}
          </div>
          <div className="flex flex-col items-center justify-center ">
            {data.active ? (
              <Button>
                <Link href={`/competitions/activeCompetitions/${data.id}`}>
                  {data.title}
                </Link>
              </Button>
            ) : (
              <Button className="bg-gray-400">{data.title}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
