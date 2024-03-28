import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({image, title, details,bottomBorder}) {
  return (
    <Card sx={{ maxWidth: 345 }} className=' shadow-xl rounded-xl'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
          className={`md:h-80 border-b-8 border-b-[${bottomBorder}]`}
          
        />
        <div className={`h-3 w-full bg-[${bottomBorder}]`}></div>
        <CardContent className=' my-5'>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
