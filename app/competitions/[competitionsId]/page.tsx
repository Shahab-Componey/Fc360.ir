import React from "react";
import competitions from "./competitions.js";
import Button from "@/app/components/Button.tsx";

export default async function page({params}: {params: any}) {
  const {competitionsId} = await params;
  const competition = competitions.find((v) => v.id == competitionsId);
  return (
    <div className="text-Regular flex-col flex h-full w-full justify-center items-center">
      <div>
        <Button>بازگشت</Button>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div>{competition?.id}</div>
        <div>{competition?.title}</div>
        <div>{competition?.teaser}</div>
        <div>{competition?.descrption}</div>
        <div>{competition?.rules}</div>
        <div>{competition?.docsLink}</div>
      </div>
    </div>
  );
}
