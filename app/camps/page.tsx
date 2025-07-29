import React from "react";
import Camps from "../components/Camp/Camps";
import {fetchCamps} from "../services/capmsServices";
import ICamp from "../_models/camp.model";
export const revalidate = 60;

export default async function page() {
  const camps: ICamp[] = await fetchCamps().then((response) => response.data);
  return <Camps camps={camps}></Camps>;
}
