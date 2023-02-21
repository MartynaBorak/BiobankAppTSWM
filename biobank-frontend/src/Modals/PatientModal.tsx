import {Patient} from "../Model/Patient";
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField} from "@mui/material";
import {useState} from "react";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {savePatient, updatePatient} from "../Services/PatientsService";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    flexGrow: 1,

};

interface PatientModalParams {
    patient: Patient,
    open: boolean,
    onClose: () => void
}

const PatientModal = (params: PatientModalParams) => {
    const [patient, setPatient] = useState<Patient>(params.patient ? params.patient : {} as Patient)

    const handleNameChange = (name: string) => {
        const newPatient = {...patient}
        newPatient.name = name
        setPatient(newPatient)
    }

    const handleAddressChange = (address: string) => {
        const newPatient = {...patient}
        newPatient.address = address
        setPatient(newPatient)
    }

    const handleBirthdayChange = (date: Date | null) => {
        if(date != null) {
            const newPatient = {...patient}
            newPatient.birthDate = date
            setPatient(newPatient)
        }
    }

    const handleSexChange = (sex: string) => {
        const newPatient = {...patient}
        newPatient.sex = sex
        setPatient(newPatient)
    }

    const saveButtonClick = () => {
        const newPatient = {...patient}
        if(!newPatient.birthDate)
            newPatient.birthDate = new Date()
        if(!newPatient.patientID || newPatient.patientID === 0) {
            savePatient(newPatient)
                .then()
                .finally(params.onClose)
        }
        else{
            updatePatient(newPatient)
                .then()
                .finally(params.onClose)
        }
    }

    return (
        <Modal
            open={params.open}
            onClose={params.onClose}
        >
            <Box sx={style}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <TextField id="name-field"
                                   label="Name"
                                   value={patient.name ? patient.name : ''}
                                   onChange={(event) => handleNameChange(event.target.value)}
                                   variant="outlined"
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="address-field"
                                   label="Address"
                                   value={patient.address? patient.address : ''}
                                   onChange={(event) => handleAddressChange(event.target.value)}
                                   variant="outlined"
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="sex-select-label">Sex</InputLabel>
                            <Select
                                labelId="sex-select-label"
                                id="sex-select"
                                value={patient.sex ? patient.sex : ''}
                                label="Sex"
                                onChange={(event) => handleSexChange(event.target.value as string)}
                            >
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker onChange={(date) => handleBirthdayChange(date)}
                                               label="Birth Date"
                                               value={patient.birthDate? patient.birthDate : new Date()}
                                               inputFormat="DD/MM/YYYY"
                                               renderInput={(params) => <TextField {...params} />}/>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant={"contained"}
                                onClick={saveButtonClick}>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default PatientModal