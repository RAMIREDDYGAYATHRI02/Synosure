import React, { useState } from 'react';
import { Cardlist } from '../src/data/data';
import {Link} from "react-router-dom";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Cards = () => {


  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Cardlist.map(item => (
          <Card sx={{ maxWidth: '390px', m: 2 }} key={item.id}>
            <CardActionArea>
              <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={item.image} alt={item.name} />
            </CardActionArea>
            <CardContent>
              <Typography variant="h5" gutterBottom component={'div'}>
                {item.name}
              </Typography>
              <Typography variant="body2">
                {item.Description}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "right", marginTop: "20px" }}>
                <Link to="/event"><Button variant="contained" color="primary" >
                  View More
                </Button></Link>
             </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
     
    </>
  );
};

export default Cards;
