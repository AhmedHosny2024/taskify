import { Alert, Box, Button,Typography } from "@mui/material";
// import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { Container, WebCam } from "./style";
import { useCallback, useRef, useState } from "react";
import useLog from "./LoginServer";
import { useDispatch } from "react-redux";
import { SetMyId, setdep, setlastId, setrole, stmyname } from "../../Redux/dataSlice";

export default function Login(){

    let yes=true
    const videoConstraints = {
        //   width: 300,
        //   height: 300,
          facingMode: 'user',
        }
    const webcamRef = useRef(null)
    const [picture, setPicture] = useState('')
    const dipatch=useDispatch();

    setTimeout(() => {
        capture()
    }, 1000);

    const [data, dataError, statusCode]= useLog(picture.split(",")[1])
    const capture = useCallback(async () => {
        const pictureSrc = webcamRef.current.getScreenshot()
        await setPicture(pictureSrc)
        
        if (statusCode === 200&&data.id !=null&&yes ) {
            await dipatch(SetMyId(data.id))
            await dipatch(stmyname(data.name))
            await dipatch(setlastId(data.id))
            await dipatch(setdep(data.department.id))
            await dipatch(setrole(data.role.name))
            yes=false 
            console.log(data)

          window.location.pathname = `/`;
        console.log("in")
        }

      })

    const reg=async ()=>{    
            window.location.pathname = 'reg'
}
    return (
    <Container>
        <Typography variant="h2" >Smile for the picture 😁</Typography>
        {statusCode===401 &&<Alert severity="error" sx={{mt:2}}>Try to be clear in image we can't find you </Alert>}
        {statusCode===402&&<Alert severity="error" sx={{mt:2}}>There are more than one person in the camera, please be alone to enter </Alert>}
        {statusCode===403&&<Alert severity="error" sx={{mt:2}}>Try to register </Alert>}
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