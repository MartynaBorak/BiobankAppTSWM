import {Patient} from "./Patient";

export interface Laboratory {
    labID: number,
    name: string,
    address: string,
    patients: Patient[],
}