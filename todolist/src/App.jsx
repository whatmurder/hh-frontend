import React, { useState } from "react";
import Todolist from "./components/Todolist.jsx";
import Home from "./components/Home.jsx";
import { AppBar, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function App() {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            <Container fixed>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">ToDo-List</Typography>
                    </Toolbar>
                    <Tabs value={tabValue} onChange={handleTabChange} aria-label="simple tabs example">
                        <Tab label="Home" />
                        <Tab label="Todos" />
                    </Tabs>
                </AppBar>

                {tabValue === 0 && <Home />}
                {tabValue === 1 && <Todolist />}
            </Container>
        </>
    );
}