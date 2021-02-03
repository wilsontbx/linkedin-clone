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
      <AppBar position="static" elevation={0} style={{ background: "white" }}>
        <Toolbar>
          <Typography className={classes.title} style={{ color: "#0D5BBA" }}>
            <h1>
              Linked
              <span className="logo">in</span>
            </h1>
          </Typography>

          <Button color="primary">Join now</Button>
          <Button variant="outlined" color="primary">
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
