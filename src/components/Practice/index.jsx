import React from "react";
import "./practice.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function index() {
  return (
    <div className="practice-container">
      <div className="practice-heading">
        <p>Area of Practices</p>
      </div>
      <Box className = "practice-grid" sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <div className="practice-image">
                <img src = "img1.png" alt = "first" />
                <p>BUSINESS LAW</p>
            </div>
          </Grid>
          <Grid item xs={4} >
          <div className="practice-image">
                <img src = "img2.png" alt = "first" />
                <p>PARTNERSHIP LAW</p>
            </div>
          </Grid>
          <Grid item xs={4} >
          <div className="practice-image">
                <img src = "img3.png" alt = "first" />
                <p>BUSINESS LAW</p>
            </div>
          </Grid>
          <Grid item xs={8} >
          <div className="practice-image">
                <img src = "img4.png" alt = "first" />
                <p>REAL ESTATE LAW</p>
            </div>
          </Grid>
          <Grid item xs={8}>
          <div className="practice-image">
                <img src = "img5.png" alt = "first" />
                <p>LANDLORD DISPUTES LAW</p>
            </div>
          </Grid>
          <Grid item xs={4} >
          <div className="practice-image">
                <img src = "img6.png" alt = "first" />
                <p>ELDER ABUSE</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
