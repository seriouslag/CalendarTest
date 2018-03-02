import {Moment} from "moment";
import {Holiday} from "./holiday";

export interface Day {
  date: Moment;
  num: number;
  holidays?: Holiday[];
}
