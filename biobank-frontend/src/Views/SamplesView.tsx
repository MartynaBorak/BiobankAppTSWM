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
import {Sample} from "../Model/Sample";
import {getAllSamples} from "../Services/SamplesService";
import SampleModal from "../Modals/SampleModal";
import DeleteSampleModal from "../Modals/DeleteSampleModal";

const SamplesView = () => {

    const [samples, setSamples] = useState<Sample[]>([])
    const [showSampleModal, setShowSampleModal] = useState<boolean>(false)
    const [sampleForModal, setSampleForModal] = useState<Sample>({} as Sample)
    const [showSampleDeleteModal, setShowSampleDeleteModal] = useState<boolean>(false)
    const [sampleForDeleteModal, setSampleForDeleteModal] = useState<Sample>({} as Sample)

    useEffect(() => {
        getAllSamples()
            .then(response => {
                setSamples(response.data)
            })
            .catch(error => {
                console.log(error)
                setSamples([])
            })
    }, [!showSampleModal, !showSampleDeleteModal])

    const showModal = () => {
        if(showSampleModal){
            return (
                <SampleModal sample={sampleForModal} open={showSampleModal} onClose={() => {
                    setShowSampleModal(false)
                    setSampleForModal({} as Sample)
                }}/>
            )
        }
        else if(showSampleDeleteModal){
            return (
                <DeleteSampleModal sample={sampleForDeleteModal} open={showSampleDeleteModal} onClose={() => {
                    setShowSampleDeleteModal(false)
                    setSampleForDeleteModal({} as Sample)
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
                        <Typography
                            variant="h3"
                            color="primary"
                            sx={{ flexGrow: 1 }}
                        >
                            Samples
                        </Typography>
                    </Grid>
                    {/* List of samples */}
                    <TableContainer
                        sx={{
                            p: 1,
                            pt: 3,
                            m: 1,
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
                                    <TableCell align={"center"}>Type</TableCell>
                                    <TableCell align={"center"}>Sample Taken</TableCell>
                                    <TableCell align={"center"}>Volume (ml)</TableCell>
                                    <TableCell align={"center"}>Patient</TableCell>
                                    <TableCell align={"center"}
                                               sx={{
                                                   width: 0.3
                                               }}
                                    >
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {samples.map((row) => (
                                    <TableRow key={row.sampleID.toString()}>
                                        <TableCell>{row.sampleID.toString()}</TableCell>
                                        <TableCell align={"center"}>{row.type}</TableCell>
                                        <TableCell align={"center"}>{row.sampleTaken ? row.sampleTaken.toString().substring(0, 10) : ''}</TableCell>
                                        <TableCell align={"center"}>{row.volume}</TableCell>
                                        <TableCell align={"center"}>{row.patientID?.toString()}</TableCell>
                                        <TableCell align={"center"}>
                                            <Box
                                                display="flex"
                                                justifyContent="space-around"
                                                alignItems="center"
                                            >
                                                <Button variant="contained"
                                                        onClick={() => {
                                                            setSampleForModal(row)
                                                            setShowSampleModal(true)
                                                        }}>
                                                    Change
                                                </Button>
                                                <Button variant="contained"
                                                        onClick={() => {
                                                            setSampleForDeleteModal(row)
                                                            setShowSampleDeleteModal(true)
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

export default SamplesView