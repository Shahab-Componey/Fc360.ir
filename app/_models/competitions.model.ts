import {State} from "../_enums/state.enum";
import {IBaseStrapiAttributes} from "./base.model";

export default interface ICompetitions extends IBaseStrapiAttributes {
  state: State;
  title: string;
  date: string;
  registerForm: string;
  teaserLink: string;
  time: string;
  address: string;
  googleMap: string;
  register: boolean | null;
  surveyForm: string;
}
