import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    colorDefault: {},
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar
                position="static"
                style={{ background: "white", color: "#2967BC" }}
            >
                <Toolbar>
                    <Typography
                        className={classes.title}
                        variant="h5"
                        bold
                        noWrap
                    >
                        Linkedin
                    </Typography>

                    <Button color="primary">Primary</Button>
                    <Button variant="outlined" color="primary">
                        Primary
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
