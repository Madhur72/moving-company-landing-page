import { Typography, Paper, TextField,Button } from "@mui/material";
import React from "react";
import "../App.css";
import Quote from "./Quote";
const QuoteForm = () => {
  return (
    <Paper sx={{ maxWidth: "1400px" }}>
      <div className="quote-content-container">
        <div className="quote-content-headline">
          <Typography variant="h4" fontWeight="bold">
            What type of quote <br /> do you need?
          </Typography>
        </div>
        <div className="row-content-container">
          <Quote text="Residential or Business?" option1="For Residence" option2="For Business"></Quote>
          <Quote text="What can we help you with?" option1="Moving" option2="Storage"></Quote>
          <Paper elevation={12} sx={{width:"400px",padding:"10px"}}>
            <Typography>Current Zip Code</Typography>
            <TextField/>
          </Paper>
        </div>
        <div className="row-content-container">
        <Paper elevation={12} sx={{width:"400px",padding:"10px"}}>
            <Typography>Estimated Time Frame</Typography>
            <TextField/>
          </Paper>
          <Quote text="where will you keep your containers" option1="My Location" option2="MovEx Facility"></Quote>
          <Paper elevation={12} sx={{width:"400px",padding:"10px"}}>
            <Typography>Email</Typography>
            <TextField/>
          </Paper>
        </div>
        <div className="row-content-container">
        <Paper elevation={12} sx={{width:"400px",padding:"10px"}}>
            <Typography>Start Date</Typography>
            <TextField type="date"/>
          </Paper>
          <Button variant="contained" sx={{width:"300px",fontSize:"23px"}}>Get a Quote</Button>

        </div>
      </div>
    </Paper>
  );
};

export default QuoteForm;
