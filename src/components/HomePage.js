import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import NavBar from "./NavBar";
import LoginComp from "./LoginComp";

export default function HomePage() {
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <NavBar />
                <LoginComp />
            </Container>
        </React.Fragment>
    );
}
