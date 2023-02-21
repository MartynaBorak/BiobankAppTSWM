import {Sample} from "../Model/Sample";
import {Box, Button, Grid, MenuItem, Modal} from "@mui/material";
import {useState} from "react";
import {deleteSample} from "../Services/SamplesService";
import Typography from "@mui/material/Typography";

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

const DeleteSampleModal = (params: SampleModalParams) => {
    const [sample, setSample] = useState<Sample>(params.sample ? params.sample : {} as Sample)

    const deleteButtonClick = () => {
        deleteSample(sample.sampleID)
            .then()
            .finally(params.onClose)
    }

    const cancelButtonClick = () => {
        params.onClose()
    }

    return (
        <Modal
            open={params.open}
            onClose={params.onClose}
        >
            <Box sx={style}>
                <Grid container spacing={4} justifyContent={"center"}>
                    <Grid item xs={12}>
                        <Typography variant="h4" color="primary" align="center">
                            Are you sure you want to delete sample?
                        </Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="center">
                        <Button variant="outlined"
                                size="large"
                                onClick={cancelButtonClick}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="center">
                        <Button variant="contained"
                                size="large"
                                onClick={deleteButtonClick}>
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

export default DeleteSampleModal