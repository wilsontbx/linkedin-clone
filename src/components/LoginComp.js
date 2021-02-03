import React from "react";
import { Typography, Grid, TextField, Button } from "@material-ui/core/";
import "./LoginComp.css";

export default function LoginComp() {
    return (
        <section>
            <Grid item xs={7}>
                <Typography variant="h2" style={{ margin: "20px 0 20px 0" }}>
                    Welcome to your professional community
                </Typography>
                <Grid item xs={7}>
                    <TextField
                        id="outlined-basic"
                        label="Email or phone number"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        fullWidth
                    />
                    <a href="">Forgot password</a>

                    <Button variant="contained" color="primary" fullWidth>
                        Primary
                    </Button>
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>
            <Grid item xs={5}></Grid>
        </section>
    );
}
