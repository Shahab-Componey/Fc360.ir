import CompetitionDetails from "@/app/components/Competition/CompetitionDetails";
import {fetchCompetitionsById} from "@/app/services/competitionsService";
import React from "react";
export const revalidate = 60;

export default async function Page({params}: any) {
  const competitions = await fetchCompetitionsById(params.competitionsId).then(
    (response) => response.data
  );
  return <CompetitionDetails competition={competitions}></CompetitionDetails>;
}
