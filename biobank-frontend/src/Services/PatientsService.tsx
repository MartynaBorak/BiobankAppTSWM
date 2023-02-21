import axios from "axios"
import {Patient} from "../Model/Patient";
import {LOCALHOST, PATIENTS} from "./utils/URLs";

const getAllPatients = async ()=> {
    return await axios.get(LOCALHOST + PATIENTS)
}

const getPatientById = async (id: bigint) => {
    return await axios.get(LOCALHOST + PATIENTS + "/" + id)
}

const savePatient = async (patient: Patient) => {
    if(!patient.patientID)
        patient.patientID = 0
    if(!patient.labID)
        patient.labID = 1
    return await axios.post(LOCALHOST + PATIENTS, patient)
}

const updatePatient = async (patient: Patient) => {
    if(!patient.labID)
        patient.labID = 1
    return await axios.put(LOCALHOST + PATIENTS, patient)
}

const deletePatient = async (id: number) => {
    return await axios.delete(LOCALHOST + PATIENTS + "/" + id)
}

export {getAllPatients, getPatientById, savePatient, updatePatient, deletePatient}