import {Sample} from "../Model/Sample";
import {Box, Button, Grid, Modal, TextField} from "@mui/material";
import {useState} from "react";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {updateSample, saveSample} from "../Services/SamplesService";

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

interface SampleModalParams {
    sample: Sample,
    open: boolean,
    onClose: () => void
}

const SampleModal = (params: SampleModalParams) => {
    const [sample, setSample] = useState<Sample>(params.sample ? params.sample : {} as Sample)

    const handleTypeChange = (type: string) => {
        const newSample = {...sample}
        newSample.type = type
        setSample(newSample)
    }

    const handleVolumeChange = (volume: number) => {
        const newSample = {...sample}
        newSample.volume = volume
        setSample(newSample)
    }

    const handleSampleTakenChange = (sampleTaken: Date | null) => {
        if(sampleTaken != null) {
            const newSample = {...sample}
            newSample.sampleTaken = sampleTaken
            setSample(newSample)
        }
    }

    const saveButtonClick = () => {
        const newSample = {...sample}
        if(!newSample.sampleTaken)
            newSample.sampleTaken = new Date()
        if(!newSample.sampleID || newSample.sampleID === 0) {
            saveSample(newSample)
                .then()
                .finally(params.onClose)
        }
        else{
            updateSample(newSample)
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
                        <TextField id="type-field"
                                   label="Type"
                                   value={sample.type ? sample.type : ''}
                                   onChange={(event) => handleTypeChange(event.target.value)}
                                   variant="outlined"
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="volume-field"
                                   type="number"
                                   label="Volume"
                                   value={sample.volume ? sample.volume : 0}
                                   onChange={(event) => handleVolumeChange(Number(event.target.value))}
                                   variant="outlined"
                                   fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker onChange={(date) => handleSampleTakenChange(date)}
                                               label="Sample Taken"
                                               value={sample.sampleTaken ? sample.sampleTaken : new Date()}
                                               inputFormat="DD/MM/YYYY"
                                               renderInput={(params) => <TextField {...params} />}/>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained"
                                fullWidth={true}
                                size="large"
                                onClick={saveButtonClick}>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default SampleModal