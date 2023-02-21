
export interface Sample {
    sampleID: number,
    type: string,
    sampleTaken: Date,
    volume: number,
    patientID: number | null | undefined,
}