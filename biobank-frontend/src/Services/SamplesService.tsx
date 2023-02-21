import axios from "axios"
import {Sample} from "../Model/Sample";
import {LOCALHOST, SAMPLES} from "./utils/URLs";

const getAllSamples = async () => {
    return await axios.get(LOCALHOST + SAMPLES)
}

const getSampleById = async (id: bigint) => {
    return await axios.get(LOCALHOST + SAMPLES + "/" + id)
}

const saveSample = async (sample: Sample) => {
    return await axios.post(LOCALHOST + SAMPLES, sample)
}

const updateSample = async (sample: Sample) => {
    return await axios.put(LOCALHOST + SAMPLES, sample)
}

const deleteSample = async (id: number) => {
    return await axios.delete(LOCALHOST + SAMPLES + "/" + id)
}

export {getAllSamples, getSampleById, saveSample, updateSample, deleteSample}