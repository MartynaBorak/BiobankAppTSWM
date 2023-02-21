import {
    Button,
    Container,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import {Fragment, useEffect, useState} from "react";
import {Patient} from "../Model/Patient";
import {getAllPatients} from "../Services/PatientsService";
import PatientModal from "../Modals/PatientModal";
import {Sample} from "../Model/Sample";
import SampleModal from "../Modals/SampleModal";
import DeletePatientModal from "../Modals/DeletePatientModal";

const PatientsView = () => {

    const [patients, setPatients] = useState<Patient[]>([])
    const [showPatientModal, setShowPatientModal] = useState<boolean>(false)
    const [patientForModal, setPatientForModal] = useState<Patient>({} as Patient)
    const [showSampleModal, setShowSampleModal] = useState<boolean>(false)
    const [sampleForModal, setSampleForModal] = useState<Sample>({} as Sample)
    const [showPatientDeleteModal, setShowPatientDeleteModal] = useState<boolean>(false)
    const [patientForDeleteModal, setPatientForDeleteModal] = useState<Patient>({} as Patient)


    useEffect(() => {
        getAllPatients()
            .then(response => {
                setPatients(response.data)
            })
            .catch(error => {
                console.log(error)
                setPatients([])
            })
    }, [!showPatientModal, !showPatientDeleteModal])

    const showModal = () => {
        if(showPatientModal){
            return (
                <PatientModal patient={patientForModal} open={showPatientModal} onClose={() => {
                    setShowPatientModal(false)
                    setPatientForModal({} as Patient)
                }}/>
            )
        }
        else if(showSampleModal){
            return (
                <SampleModal sample={sampleForModal} open={showSampleModal} onClose={() => {
                    setShowSampleModal(false)
                    setSampleForModal({} as Sample)
                }}/>
            )
        }
        else if(showPatientDeleteModal){
            return (
                <DeletePatientModal patient={patientForDeleteModal} open={showPatientDeleteModal} onClose={() => {
                    setShowPatientDeleteModal(false)
                    setPatientForDeleteModal({} as Patient)
                }}/>
            )
        }
    }

    return (
        <Fragment>
            <Container maxWidth="xl" sx={{ mt: 6, mb: 6 }}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                        m: 1,
                        backgroundColor: (theme) => theme.palette.grey[200] + 'f3'
                    }}
                >
                    <Grid container
                          spacing={1}
                          sx={{
                              m:1,
                              maxWidth: 0.95
                          }}
                    >
                        <Grid item xs={10}>
                            <Typography
                                variant="h3"
                                color="primary"
                                sx={{ flexGrow: 1 }}
                            >
                                Patients
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            {/* Add patient button */}
                            <Button variant="outlined"
                                    onClick={() => {
                                        setPatientForModal({} as Patient)
                                        setShowPatientModal(true)
                                    }}>
                                Add patient
                            </Button>
                        </Grid>
                    </Grid>
                    {/* List of patients */}
                    <TableContainer
                        sx={{
                            p: 1,
                            my: 2,
                            mx: 2,
                            maxWidth: 0.95
                        }}
                    >
                        <Table
                            size={"small"}
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell
                                        sx={{
                                            width: 0.35
                                        }}
                                    >
                                        Name
                                    </TableCell>
                                    <TableCell align={"center"}>Sex</TableCell>
                                    <TableCell align={"center"}
                                               sx={{
                                                   width: 0.4
                                               }}
                                    >
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {patients.map((row) => (
                                    <TableRow key={row.patientID.toString()}>
                                        <TableCell>{row.patientID.toString()}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell align={"center"}>{row.sex}</TableCell>
                                        <TableCell align={"center"}>
                                            <Box
                                                display="flex"
                                                justifyContent="space-around"
                                                alignItems="center"
                                            >
                                                <Button variant="contained"
                                                        onClick={() => {
                                                            setPatientForModal(row)
                                                            setShowPatientModal(true)
                                                        }}>
                                                    More
                                                </Button>
                                                <Button variant="contained"
                                                        onClick={() => {
                                                            const sample = {} as Sample
                                                            sample.patientID = row.patientID
                                                            setSampleForModal(sample)
                                                            setShowSampleModal(true)
                                                        }}>
                                                    Add sample
                                                </Button>
                                                <Button variant="contained"
                                                        onClick={() => {
                                                            setPatientForDeleteModal(row)
                                                            setShowPatientDeleteModal(true)
                                                        }}>
                                                    Delete
                                                </Button>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
            {showModal()}
        </Fragment>
    )
}

export default PatientsView