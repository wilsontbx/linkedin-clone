import React from "react";
import { Typography, Grid, Button } from "@material-ui/core/";
import "./FindJobComp.css";
const str = [
  "Engineering",
  "Business Development",
  "Finance",
  "Administrative Assistant",
  "Retail Associate",
  "Customer Service",
  "Operations",
  "Information Technology",
  "Marketing",
  "Human Resources",
  "Healthcare Service",
  "Sales",
  "Program and Project Management",
  "Accounting",
  "Arts and Design",
  "Community and Social Services",
  "Consulting",
  "Education",
  "Entrepreneurship",
  "Legal",
  "Media and Communications",
  "Military and Protective Services",
  "Product Management",
  "Purchasing",
  "Quality Assurance",
  "Real Estate",
  "Research",
  "Support",
  "Administrative",
];
export default function FindJobComp() {
  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Typography variant="h2" style={{ color: "#0D5BBA" }}>
            Find open jobs and internships
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h5">SUGGESTED SEARCHES</Typography>
          {str.map((element) => (
            <Button variant="contained">{element}</Button>
          ))}
        </Grid>
      </Grid>
    </section>
  );
}
