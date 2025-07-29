"use client";
import React, {
  PropsWithoutRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Button from "../Button.tsx";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Image from "next/image.js";
import {serverLink} from "../../utils/serverLink.ts";

const registerColers: any = {
  true: "text-green-400",
  false: "text-red-700",
};
export default function Page({camps}: any) {
  useGSAP(() => {
    gsap.fromTo(".main", {opacity: 0}, {opacity: 1, duration: 1});
  });

  console.log(camps);
  const [activeTab, setActiveTab] = useState<string>("");

  const CampsList = useMemo(
    () =>
      camps
        .filter((v: any) => v.state === activeTab)
        .map((v: any) => <Camps key={v.id} data={v}></Camps>),
    [activeTab, camps]
  );

  useEffect(() => {
    handleTabChange("ACTIVE");
  }, [camps]);

  const handleTabChange = useCallback(
    (tabName: string) => {
      console.log(tabName);
      if (tabName === "PAST") {
        setActiveTab("PAST");
      } else if (tabName === "ACTIVE") {
        setActiveTab("ACTIVE");
      }
    },
    [camps]
  );

  return (
    <div className="main text-Regular w-full flex h-full items-center  flex-1 flex-col gap-5 overflow-y-auto text-nowrap px-3">
      <div className="flex gap-5 flex-wrap items-center justify-center">
        <div
          className={`underline cursor-pointer ${
            activeTab === "PAST" ? "text-white" : "text-Regular"
          }`}
          onClick={() => handleTabChange("PAST")}
        >
          اردو های گذشته{" "}
        </div>
        <div
          className={`underline cursor-pointer ${
            activeTab === "ACTIVE" ? "text-white" : "text-Regular"
          }`}
          onClick={() => handleTabChange("ACTIVE")}
        >
          اردو های پیش رو{" "}
        </div>
      </div>

      {CampsList ?? <div>خطای سیستمی</div>}
    </div>
  );
}

const Camps = ({data}: any) => {
  return (
    <div className="flex  flex-col border border-white rounded-xl p-5 items-center ">
      <div className="flex items-center flex-col gap-3">
        <div className="w-full h-24">
          {data.banner ? (
            <Image
              className="rounded-xl object-cover w-96 "
              src={serverLink(data.banner)}
              alt=""
              width={200}
              height={200}
              loading="lazy"
            ></Image>
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className={`${registerColers[`${data?.register}`]}`}>
            {(data.register === true && "ثبت نام باز است") ||
              (data.register === false && "ثبت نام بسته است")}
          </div>
          <div className="flex flex-col items-center justify-center ">
            {data.register || data.state === "PAST" ? (
              <Button>
                <Link href={`/camps/${data.documentId}`}>{data.title}</Link>
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
