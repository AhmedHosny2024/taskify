import { Alert, Box, Button,Typography } from "@mui/material";
// import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { Container, WebCam } from "./style";
import { useCallback, useRef, useState } from "react";
export default function Login(){

    const videoConstraints = {
        //   width: 300,
        //   height: 300,
          facingMode: 'user',
        }
    const webcamRef = useRef(null)
    const [picture, setPicture] = useState('')

    setTimeout(() => {
        capture()
        console.log(picture)
    }, 3000);
    const capture = useCallback(() => {
        const pictureSrc = webcamRef.current.getScreenshot()
        setPicture(pictureSrc)
      })

    const reg=async ()=>{    
            window.location.pathname = 'reg'
}
    return (
    <Container>
        <Typography variant="h2" >Smile for the picture 😁</Typography>
        <Alert severity="error" sx={{mt:2,width:"100%"}}>More than one person in the image, Please be alone </Alert>
            <Box>
                <WebCam
                    audio={false}
                    // height={400}
                    ref={webcamRef}
                    // width={400}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                />
            </Box>
        <Box>
                <Button variant="contained" onClick={reg} sx={{}}>register
                <AddAPhotoOutlinedIcon sx={{m:1}}/>
                </Button>
        </Box>
    </Container>
    )
}