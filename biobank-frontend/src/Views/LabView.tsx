import {
    Button,
    Container, Divider,
    Grid,
    Paper, TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Fragment, useEffect, useState} from "react";
import {Laboratory} from "../Model/Laboratory";
import {getLaboratoryById, updateLaboratory} from "../Services/LaboratoriesService";

const LabView = () => {

    const [lab, setLab] = useState<Laboratory>({} as Laboratory)
    const [isUpdate, setIsUpdate] = useState(false)

    useEffect(() => {
        getLaboratoryById(1) //w tej wersji projektu jest tylko jedno laboratorium
            .then(response => {
                setLab(response.data)
            })
    }, [])

    const handleNameChange = (name: string) => {
        const newLab = {...lab}
        newLab.name = name
        setLab(newLab)
    }

    const handleAddressChange = (address: string) => {
        const newLab = {...lab}
        newLab.address = address
        setLab(newLab)
    }

    const nameElement = () => {
        if(!isUpdate){
            return (
                <Typography variant="h6">
                    {lab.name}
                </Typography>
            )
        }
        else{
            return (
                <TextField id="lab-name-textfield"
                           label="Name"
                           value={lab.name ? lab.name : ''}
                           onChange={(event) => handleNameChange(event.target.value)}
                           variant="standard"
                           />
            )
        }
    }

    const addressElement = () => {
        if(!isUpdate){
            return (
                <Typography variant="h6">
                    {lab.address}
                </Typography>
            )
        }
        else{
            return (
                <TextField id="lab-address-textfield"
                           label="Address"
                           value={lab.address ? lab.address : ''}
                           onChange={(event) => handleAddressChange(event.target.value)}
                           variant="standard"
                />
            )
        }
    }

    const handleUpdateButtonClick = () => {
        if(!isUpdate)
            setIsUpdate(true)
        else{
            setIsUpdate(false)
            updateLaboratory(lab).then()
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
                        height: '80vh',
                        m: 1,
                        backgroundColor: (theme) => theme.palette.grey[200] + 'f3'
                    }}
                >
                    <Grid container
                          spacing={5}
                          sx={{
                              m:1,
                              maxWidth: 1
                          }}
                    >
                        <Grid item xs={10}>
                            <Typography
                                variant="h3"
                                color="primary"
                                sx={{ flexGrow: 1 }}
                            >
                                Laboratory information
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            {/* Update laboratory info button */}
                            <Button variant="outlined"
                                    onClick={handleUpdateButtonClick}>
                                {isUpdate ? "Save" : "Change"}
                            </Button>
                        </Grid>
                        <Divider/>
                        <Grid item xs={12}/>
                        <Grid item xs={3}>
                            <Typography variant="h5">
                                <b>Name: </b>
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            {nameElement()}
                        </Grid>
                        <Grid item xs={6}/>
                        <Grid item xs={3}>
                            <Typography variant="h5">
                                <b>Address: </b>
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            {addressElement()}
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Fragment>
    )
}

export default LabView