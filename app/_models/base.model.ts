import {State} from "../_enums/state.enum";
import Photo from "./photo.model";

export interface IBaseStrapiAttributes {
  id: number;
  documentId: string;
}

export interface IBaseDataAttributes {
  state: State;
  title: string;
  date: string;
  registerForm: string;
  teaserLink: string;
  time: string;
  address: string;
  googleMap: string;
  register: boolean;
  surveyForm: string;
  banner: Photo;
  teaser: string;
}
