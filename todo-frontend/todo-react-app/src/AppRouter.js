import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";

function CopyRight() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright ©"}
            오늘의 할일, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/" element={<App />} />
                        </Routes>
                    </div>
                    <Box mt={5}>
                        <CopyRight />
                    </Box>
                </Router>
            </div>
        );
    }
}

export default AppRouter;