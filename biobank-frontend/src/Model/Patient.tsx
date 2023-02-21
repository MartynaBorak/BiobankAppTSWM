import {Sample} from "./Sample";

export interface Patient {
    patientID: number,
    name: string,
    address: string,
    birthDate: Date,
    sex: string,
    labID: number | null | undefined,
    samples: Sample[] | null | undefined,
}
