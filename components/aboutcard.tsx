import React from "react";
import Button from "@mui/material/Button";
import {
  Card,
  CardContent,
  CardMedia,
  Hidden,
  Typography,
} from "@mui/material";
import aboutData from "@/assets/aboutData.json";

type AboutcardProps = {
  title: string;
  description: string;
  image: string;
};
const Aboutcard: React.FC<AboutcardProps> = ({ title, description, image }) => {
  return (
    <div className="px-8 py-8 flex justify-center">
      <Card
        sx={{
          width: 750,
          height: 400,
          paddingX: 4,
          borderRadius: 3,
          boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardMedia
          sx={{
            height: 0,
            paddingTop: "10.25%", // 16:9 aspect ratio (adjust as needed)
            backgroundSize: "contain",
            marginTop: 2, // Align content vertically to the center
          }}
          image={image}
          title={title}
        />
        <CardContent sx={{ paddingTop: 2 }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              textAlign: "justify",
              display: "flex",
              justifyContent: "center",
              paddingY: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            color="black"
            sx={{
              textAlign: "justify",
              display: "flex",
              justifyContent: "center",
              minWidth: 30,
              paddingX: 4,
            }}
          >
            {description.split(" ").slice(0, 47).join(" ")}
            {description.length > 47 ? "..." : ""}
          </Typography>
          <Button variant="text" sx={{ bottom: 0 }}>
            view more
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Aboutcard;
