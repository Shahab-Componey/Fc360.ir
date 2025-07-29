import React from "react";
import {fetchCompetitions} from "../services/competitionsService";
import Competitions from "../components/Competition/Competitions";
import ICompetition from "../_models/competition.model";
export const revalidate = 60;

export default async function Page() {
  const competitions: ICompetition[] = await fetchCompetitions().then(
    (response) => response.data
  );
  return <Competitions competitions={competitions}></Competitions>;
}
