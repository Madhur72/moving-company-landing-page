import React from "react";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import "../App.css";
import comma from "../assets/commas.svg";
import first from '../assets/1.jpg'
import second from '../assets/2.jpg'
import third from '../assets/3.jpg'
const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <Typography color="grey" fontWeight="bold" fontSize={14}>
        TESTIMONIALS
      </Typography>
      <Typography color="green" fontWeight="bold" fontSize={27}>
        What our clients say about us.
      </Typography>
      <Box mt={10} className="testimonials-paper-container">
        <Paper sx={{ width: "350px" }} elevation={7}>
          <Box className="testimonials-content-container" p={5}>
            <img src={comma} alt="" />
            <Typography className="testimonial-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              porro nesciunt et quo amet fugit cumque alias consectetur vitae
            </Typography>
            <Avatar src={first}></Avatar>
          </Box>
        </Paper>
        <Paper sx={{ width: "350px" }} elevation={7}>
          <Box className="testimonials-content-container" p={5}>
            <img src={comma} alt="" />
            <Typography className="testimonial-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              porro nesciunt et quo amet fugit cumque alias consectetur vitae
            </Typography>
            <Avatar src={second}></Avatar>
          </Box>
        </Paper>
        <Paper sx={{ width: "350px" }} elevation={7}>
          <Box className="testimonials-content-container" p={5}>
            <img src={comma} alt="" />
            <Typography className="testimonial-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              porro nesciunt et quo amet fugit cumque alias consectetur vitae
            </Typography>
            <Avatar src={third}></Avatar>
          </Box>
        </Paper>
      </Box>
      <Typography mt={5} color="green" fontWeight="bold" fontSize={15}>
        No Two homes are alike!
      </Typography>
      <Typography color="grey" mt={1.2} sx={{ textAlign: "center" }} fontSize={15}>
        Our elite network, combined with your personal <br />
        needs, allows us to create a service plan specifically <br />
        tailered for you
      </Typography>
      <Button sx={{mt:"20px"}} variant="contained" color="success">GET A QUOTE</Button>
    </div>
  );
};

export default Testimonials;
