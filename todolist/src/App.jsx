import React from "react";
import Todolist from "./components/Todolist.jsx";
import "./index.css";
import {AppBar, Container, CssBaseline, Toolbar, Typography} from "@mui/material";


export default function App() {
    return <>
        <Container>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        ToDo-List
                    </Typography>
                </Toolbar>
            </AppBar>
            <Todolist/>
        </Container>
    </>;
}