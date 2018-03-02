import {Day} from "./day";

export interface Month {
  name: string;
  days: Day[];
  startDay: Day;
}
