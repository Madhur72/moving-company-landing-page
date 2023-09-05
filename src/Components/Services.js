import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import { Box, Typography } from "@mui/material";
import "../App.css";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-image-container">
        <img className="services-image1" src={image1} alt="" />
        <img className="services-image2" src={image2} alt="" />
      </div>
      <Box
        className="services-content-container"
        width="720px"
        height="70vh"
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
      >
        <div className="services-column-container">
          <Box width="300px">
            <Typography variant="h5" fontWeight="bold">
              Residential/Local
            </Typography>
            <Typography mt={1}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              itaque, nam totam corporis dolores voluptates ipsam, ipsum sit non
              debitis laudantium! Autem suscipit doloribus vitae optio maiores!
              Minima, atque error.
            </Typography>
          </Box>
          <Box width="300px">
            <Typography variant="h5" fontWeight="bold">
              Box Delivery
            </Typography>
            <Typography mt={1}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              itaque, nam totam corporis dolores voluptates ipsam, ipsum sit non
              debitis laudantium! Autem suscipit doloribus vitae optio maiores!
              Minima, atque error.
            </Typography>
          </Box>
        </div>
        <div className="services-column-container">
          <Box width="300px">
            <Typography variant="h5" fontWeight="bold">
              Commercial/Office
            </Typography>
            <Typography mt={1}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              itaque, nam totam corporis dolores voluptates ipsam, ipsum sit non
              debitis laudantium! Autem suscipit doloribus vitae optio maiores!
              Minima, atque error.
            </Typography>
          </Box>
          <Box width="300px">
            <Typography variant="h5" fontWeight="bold">
              Loading/Unloading
            </Typography>
            <Typography mt={1}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              itaque, nam totam corporis dolores voluptates ipsam, ipsum sit non
              debitis laudantium! Autem suscipit doloribus vitae optio maiores!
              Minima, atque error.
            </Typography>
          </Box>
        </div>
      </Box>
      <Box className="services-secondContent-container" width="300px" height="70vh" >
        <Typography variant="h3" sx={{ color: "white" }}>
          Our <br /> Services
        </Typography>
        <Typography sx={{color:"white"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          illum enim dolore a! Magnam necessitatibus veniam provident esse
          commodi odit perferendis eos vitae. Tenetur sequi minus consequuntur
          cumque id eligendi.
        </Typography>
      </Box>
    </div>
  );
};

export default Services;
