"use client";
import activeData from "./activeCompetitions/[competitionsId]/activeCompetitions.js";
import pastData from "./pastCompomttions/[competitionsId]/pastCompomttions.js";
import React, {useCallback, useEffect, useMemo, useState} from "react";
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
  const [tab, setTab] = useState<React.ReactNode>();

  const activeCompetitions = useMemo(
    () =>
      activeData.map((v) => (
        <ActiveCompetitions key={v.id} data={v}></ActiveCompetitions>
      )),
    [activeData]
  );

  const pastCompomttions = useMemo(
    () =>
      pastData.map((v) => (
        <PastCompomttions key={v.id} data={v}></PastCompomttions>
      )),
    [pastData]
  );

  useEffect(() => {
    if (pathname.endsWith("/pastCompomttions")) {
      setTab(pastCompomttions);
      setActiveTab("pastCompomttions");
    } else if (
      pathname.endsWith("/activeCompetitions") ||
      pathname.endsWith("/competitions")
    ) {
      setTab(activeCompetitions);
      setActiveTab("activeCompetitions");
    }
  }, [pathname, activeCompetitions, pastCompomttions]);

  const handleTabChange = useCallback(
    (tabName: string) => {
      if (tabName === "pastCompomttions") {
        setTab(pastCompomttions);
        setActiveTab("pastCompomttions");
      } else if (tabName === "activeCompetitions") {
        setTab(activeCompetitions);
        setActiveTab("activeCompetitions");
      }
    },
    [activeCompetitions, pastCompomttions]
  );

  return (
    <div className="main text-Regular w-full flex h-full items-center  flex-1 flex-col gap-5 overflow-y-auto text-nowrap px-3">
      <div className="flex gap-5 flex-wrap items-center justify-center">
        <div
          className={`underline cursor-pointer ${
            activeTab === "pastCompomttions" ? "text-white" : "text-Regular"
          }`}
          onClick={() => handleTabChange("pastCompomttions")}
        >
          مسابقات گذشته{" "}
        </div>
        <div
          className={`underline cursor-pointer ${
            activeTab === "activeCompetitions" ? "text-white" : "text-Regular"
          }`}
          onClick={() => handleTabChange("activeCompetitions")}
        >
          مسابقات پیش رو{" "}
        </div>
      </div>
      {tab}
    </div>
  );
}

const PastCompomttions = ({data}: any) => {
  return (
    <div className="flex  flex-col border border-white rounded-xl p-5 items-center ">
      <div className="flex items-center flex-col gap-3">
        <div className="w-full h-24">
          {data?.banner ? (
            <Image
              className="rounded-xl object-cover w-96 "
              src={data.banner}
              alt=""
              loading="lazy"
            ></Image>
          ) : (
            <div></div>
          )}
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
};

const ActiveCompetitions = ({data}: any) => {
  return (
    <div className="flex  flex-col border border-white rounded-xl p-5 items-center ">
      <div className="flex items-center flex-col gap-3">
        <div className="w-full h-24">
          {data?.banner ? (
            <Image
              className="rounded-xl object-cover w-96 "
              src={data.banner}
              alt=""
              loading="lazy"
            ></Image>
          ) : (
            <div></div>
          )}
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
};
