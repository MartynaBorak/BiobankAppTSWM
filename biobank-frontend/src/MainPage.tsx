import {Fragment} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import MainView from "./Views/MainView";


const mdTheme = createTheme();

const MainPage = () => {

    return (
        <Fragment>
            <ThemeProvider theme={mdTheme}>
                <CssBaseline />
                <MainView/>
            </ThemeProvider>
        </Fragment>
    )
}

export default MainPage