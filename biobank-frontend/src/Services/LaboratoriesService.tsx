import axios from "axios"
import {LABORATORIES, LOCALHOST} from "./utils/URLs";
import {Laboratory} from "../Model/Laboratory";

const getAllLaboratories = async () => {
    return await axios.get(LOCALHOST + LABORATORIES)
}

const getLaboratoryById = async (id: number) => {
    return await axios.get(LOCALHOST + LABORATORIES + "/" + id.toString())
}

const saveLaboratory = async (lab: Laboratory) => {
    return await axios.post(LOCALHOST + LABORATORIES, lab)
}

const updateLaboratory = async (lab: Laboratory) => {
    return await axios.put(LOCALHOST + LABORATORIES, lab)
}

const deleteLaboratory = async (id: number) => {
    return await axios.delete(LOCALHOST + LABORATORIES + "/" + id.toString())
}

export {getAllLaboratories, getLaboratoryById, saveLaboratory, updateLaboratory, deleteLaboratory}