import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Aboutcard = () => {
  return (
    <div className="px-28 py-28 shadow-2xl   ">
      <Card sx={{  width:750, height:500 ,paddingX :2 ,paddingY:3}}>
        <CardMedia
          sx={{
            height: 0,
            paddingTop: '20.25%', // 16:9 aspect ratio (adjust as needed)
            backgroundSize: 'contain',
            // Align content vertically to the center
          }}
          image="/handsakeabout.png"
          title="green iguana"
        />
        <CardContent sx={{paddingTop:2,marginTop:5}}>
          <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'justify', display: 'flex', justifyContent: 'center' }}>
            Expert Support and Consultation
          </Typography >
          <Typography variant="h6" gutterBottom color="black" sx={{ textAlign: 'justify', display: 'flex', justifyContent: 'center',minWidth:20 , marginTop:3 }}>
            Dataspace provides more than just hosting services since it
            recognizes the complexities of technology. We have a knowledgeable
            support staff on hand around-the-clock who are prepared to help with
            any technical questions or problems. Our dedication goes beyond
            hosting to provide ongoing support and direction, ensuring your
            technology runs without issues.
          </Typography>
        </CardContent>
      </Card>
      {/* <div className="shadow-2xl rounded-lg w-[30%] h-[400px] px-4 mx-16">
            <div className=' text-black flex flex-col gap-1 py-9 font-large'>
            <img
            src="/handsakeabout.png"
            alt="footerimage"
            width={100}
            height={90}
            className="mx-auto py-3"
            />
            <div className="flex mx-auto justify-center text-xl mx-10 mt-3 ">
            Expert Support and Consultation
            </div>

            <div className=" flex mx-auto mx-10 mt-9 justify-center">
            Dataspace provides more than just hosting services since it recognizes
            the complexities of technology. We have a knowledgeable support staff
            on hand around-the-clock who are prepared to help with any technical
            questions or problems. Our dedication goes beyond hosting to provide
            ongoing support and direction, ensuring your technology runs without
            issues.{" "}
            </div>
        </div>

        </div> */}
    </div>
  );
};

export default Aboutcard;
