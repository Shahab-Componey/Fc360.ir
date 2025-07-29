import React from "react";
import {fetchCompetitions} from "../services/competitionsService";
import Competitions from "../components/Competition/Competitions";
export const revalidate = 60;

export default async function Page() {
  const competitions = await fetchCompetitions();
  return <Competitions competitions={competitions.data}></Competitions>;
}
