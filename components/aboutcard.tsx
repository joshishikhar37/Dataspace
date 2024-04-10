import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import aboutData from "@/assets/aboutData.json";

type AboutcardProps = {
  title: string;
  description: string;
  image: string;
};
const Aboutcard: React.FC<AboutcardProps> = ({ title, description, image }) => {
  
  return (
    <div className="px-8 py-8 flex justify-center">
        <Card sx={{ width: 750, height: 400, paddingX: 2,borderRadius: 3,boxShadow: '20px 15px 18px rgba(0, 0, 0, 0.1)', }}>
        <CardMedia
          sx={{
            height: 0,
            paddingTop: '10.25%', // 16:9 aspect ratio (adjust as needed)
            backgroundSize: 'contain',
            marginTop: 2 // Align content vertically to the center
          }}
          image={image}
          title={title}
        />
        <CardContent sx={{ paddingTop: 2 }}>
          <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'justify', display: 'flex', justifyContent: 'center', paddingY: 2 }}>
            {title}
          </Typography >
          <Typography variant="h6" gutterBottom color="black" sx={{ textAlign: 'justify', display: 'flex', justifyContent: 'center', minWidth: 30, paddingX: 4 }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Aboutcard;
