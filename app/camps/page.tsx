import React from "react";
import Camps from "../components/Camp/Camps";
import {fetchCamps} from "../services/capmsServices";
export const revalidate = 60;

export default async function page() {
  const camps = await fetchCamps().then((response) => response.data);
  return <Camps camps={camps}></Camps>;
}
