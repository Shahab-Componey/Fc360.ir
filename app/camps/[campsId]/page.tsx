import ICamps from "@/app/_models/camp.model";
import CampDetails from "@/app/components/Camp/CampDetails";
import {fetchCampsById} from "@/app/services/capmsServices";
import React from "react";
export const revalidate = 60;

export default async function Page({params}: any) {
  const camp: ICamps = await fetchCampsById(params.campsId).then(
    (response) => response.data
  );
  return <CampDetails camp={camp}></CampDetails>;
}
