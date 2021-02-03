import React from "react";
import Container from "@material-ui/core/Container";
import NavBar from "./NavBar";
import LoginComp from "./LoginComp";
import FindJobComp from "./FindJobComp";

export default function HomePage() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <NavBar />
        <LoginComp />
        <FindJobComp />
      </Container>
    </React.Fragment>
  );
}
