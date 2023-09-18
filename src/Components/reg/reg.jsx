import { Box, Button, TextField, Typography } from "@mui/material";
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import { Container, Image, MyBox, MyBox2, MyContainer, MySelect, WebCam } from "./style";
import { useCallback, useRef, useState } from "react";

const videoConstraints = {
//   width: 300,
//   height: 300,
  facingMode: 'user',
}

export default function Reg(){
    const[name,setName]=useState('')
    const[role,setRole]=useState('')
    const[dep,setDep]=useState('')
    const[job,setJob]=useState('')
    const[phone,setPhone]=useState('')
    var departments=["Application","IT","IS","Markiting"]
    departments = departments.map((str) => ({ value: str, label: str }));
    var roles=["User","Admin"]
    roles = roles.map((str) => ({ value: str, label: str }));
    const Dep = (value) => {
        setDep(value)
      };
    const Role = (value) => {
        setRole(value)
    };

    const webcamRef = useRef(null)
    const [picture, setPicture] = useState('')

    const capture = useCallback(() => {
        const pictureSrc = webcamRef.current.getScreenshot()
        setPicture(pictureSrc)
      })
    const login=async ()=>{
     
            window.location.pathname = 'login'
    }
    const submit=async ()=>{
     
            
    }
    return (
        <MyContainer>
        <Typography variant="h2" sx={{margin:"6px auto",textAlign:"center"}}>Welcome to be one of us 😃</Typography>
    <Container>
        <MyBox >
            <Box sx={{justifyContent:"space-evenly",flexDirection:"column",display:"flex"}}>
                <TextField
                required
                id="standard-search"
                label="Name"
                type="text"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
                value={name}
                sx={{mb:1}}
                />
                <TextField
                required
                id="standard-search"
                label="Job Title"
                type="text"
                variant="standard"
                onChange={(e) => setJob(e.target.value)}
                value={job}
                sx={{mb:1}}
                />
                <TextField
                required
                id="standard-search"
                label="Phone"
                type="text"
                variant="standard"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                inputProps={{ maxLength: 11,minlength:11 }}
                sx={{mb:1}}
                />
                <MySelect
                    showSearch
                    placeholder="Department"
                    optionFilterProp="children"
                    onChange={Role}
                    filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={departments}
                />
                <MySelect
                    showSearch
                    placeholder="Role"
                    optionFilterProp="children"
                    onChange={Dep}
                    filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={roles}
                />
                <Box sx={{display:"flex",flexDirection:"row",my:2,justifyContent:"space-between"}}>
                    <Button variant="contained" onClick={login} >Submit</Button>
                    <Button variant="contained" onClick={submit} >
                        login
                        <PhotoCameraOutlinedIcon sx={{p:1}}/>
                    </Button>
                </Box>
            </Box>
        </MyBox>
        <MyBox2 >
            <Box>
                {picture === '' ? (
                <WebCam
                    audio={false}
                    // height={400}
                    ref={webcamRef}
                    // width={400}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                />
                ) : (
                <Image src={picture} title="you look pretty today 😍" alt=""/>
                )}
            </Box>
            {picture !== '' ? (
            <Button
            variant="contained"
                onClick={(e) => {
                e.preventDefault()
                setPicture("")
                }}
                sx={{width:"-webkit-fill-available"}}
            >
                Retake
            </Button>
            ) : (
            <Button
                variant="contained"
                onClick={(e) => {
                e.preventDefault()
                capture()
                }}
                sx={{width:"-webkit-fill-available"}}
            >
                Capture
            </Button>
            )}
        </MyBox2>
    </Container>
    </MyContainer>
    )
}