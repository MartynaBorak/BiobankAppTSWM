import {alpha, Container} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";

const HomeView = () => {
    return <Container
        sx={{
            mt:1,
            mb: 1,
            width: '100%',
            height: '88vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: alpha('#000000', 0.55)
        }}>
        <Typography
            variant="h1"
            color="white"
            sx={{
                alignContent: "center",
                p: 5,
                pb: 3,
                fontWeight: 'bold'
            }}>
            BIOBANK APP
        </Typography>
        <Typography
            variant="h4"
            color="white"
            align="center"
            sx={{
                pt: 1,
                pb: 10,
                pl: 8,
                pr: 8,
                fontStyle: 'italic'
            }}>
            Aplikacja do zarządzania danymi w laboratorium lub biobanku
        </Typography>
        <Typography
            variant="h5"
            color="white"
            sx={{
                alignContent: "center",
                pt: 1,
                p: 1
            }}>
            Autor: Martyna Borak
        </Typography>
        <Typography
            variant="h5"
            color="white"
            sx={{
                alignContent: "center",
                p: 1
            }}>
            Projekt TSWM
        </Typography>
    </Container>
}

export default HomeView