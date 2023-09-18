import React, { useCallback, useRef, useState } from "react";
import { Container, Image, MyBox, MyBox2, MySelect, WebCam } from "./style";
import { Box, Button, TextField } from "@mui/material";

const videoConstraints = {
    //   width: 300,
    //   height: 300,
      facingMode: 'user',
    }
    const data={
        name:"Ahmed Hosny",
        phone:"01060668268",
        dep:"Application",
        role:"User",
        job:"Computer Engineer"
    }
export default function Me(){
    const[name,setName]=useState(data.name)
    const[role,setRole]=useState(data.role)
    const[dep,setDep]=useState(data.dep)
    const[job,setJob]=useState(data.job)
    const[phone,setPhone]=useState(data.phone)
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
    const Save=async ()=>{
     console.log(picture)
    }
    const Cancel=async ()=>{
     
            
    }
    return(
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
                inputProps={{ maxLength: 11,minLength:11 }}
                sx={{mb:1}}
                />
                <MySelect
                    showSearch
                    placeholder="Role"
                    optionFilterProp="children"
                    onChange={Role}
                    value={role}
                    filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={roles}
                />
                <MySelect
                    value={dep}
                    showSearch
                    placeholder="Department"
                    optionFilterProp="children"
                    onChange={Dep}
                    filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={departments}
                />
                <Box sx={{display:"flex",flexDirection:"row",my:2,justifyContent:"space-between"}}>
                    <Button variant="contained" onClick={Save} >Save</Button>
                    <Button variant="contained" onClick={Cancel} >
                        Cancel
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
                <Image src={picture} alt=""/>
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

    );
}