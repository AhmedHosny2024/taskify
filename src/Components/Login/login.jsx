import { Box, Button,Typography } from "@mui/material";
// import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { Container } from "./style";
export default function Login(){


    // const login=async ()=>{
    //     const res=await httpClinte.post("//localhost:5000/login",{
    //         email,
    //         password
    //     })
    //     console.log(res)
    //     if(res.status === 200)      
    //         window.location.pathname = 'home'
    //     else if (res.statusCode === 401) {
    //         window.location.pathname = 'login';
    //         }
    // }

    const reg=async ()=>{    
            window.location.pathname = 'reg'
}
    return (
    <Container>
        <Typography variant="h2" >Smile for the picture 😁</Typography>
        <Box>
            {/* <IconButton> */}
                <Button variant="contained" onClick={reg} sx={{}}>register
                <AddAPhotoOutlinedIcon sx={{m:1}}/>
                </Button>
                {/* <Button variant="contained" onClick={login}sx={{m:2}} >login</Button> */}
                {/* <PhotoCameraOutlinedIcon/> */}
            {/* </IconButton> */}
        </Box>
    </Container>
    )
}