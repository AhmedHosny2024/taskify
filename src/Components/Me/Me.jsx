import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container, Image, MyBox, MyBox2, MySelect, WebCam } from "./style";
import { Box, Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import Info from "./MeServer";
import axios from "../../Server";
import { msg } from "../Snakbar";
import { resetState } from "../../Redux/dataSlice";
import { useDispatch } from "react-redux";


const videoConstraints = {
    //   width: 300,
    //   height: 300,
      facingMode: 'user',
    }
    // const data={
    //     name:"Ahmed Hosny",
    //     phone:"01060668268",
    //     dep:"Application",
    //     role:"User",
    //     job:"Computer Engineer"
    // }
export default function Me(){
    const id=useSelector(state=>state.MyId)
    const dispatch =useDispatch()
    const [data, error, statusCode]= Info(id)
    // const value = useMemo(() => ({ data, error }), [data, error]);
    // console.log(value);
    
    const[name,setName]=useState("")
    const[role,setRole]=useState("")
    const[dep,setDep]=useState("")
    const[job,setJob]=useState("")

    useEffect(()=>{
        setName(data?.name)
        setDep(data?.department.id)
        setRole(data?.role?.id)
        setJob(data?.jobTitle)
        setPicture(data?.image)
    },[data])
    // const[phone,setPhone]=useState(data?.phone)
    const departments=useSelector(state=>state.departments);

    const roles=useSelector(state=>state.roles)


    const Dep = (value) => {
        setDep(value)
      };
    const Role = (value) => {
        setRole(value)
    };
    // console.log(data)
    const webcamRef = useRef(null)
    const [picture, setPicture] = useState(data?.image)

    const capture = useCallback(() => {
        
        const pictureSrc = webcamRef.current.getScreenshot()
        setPicture(pictureSrc)
      })


    const Save=async ()=>{

        var image=picture
        if(picture.includes(",")){
            image=picture.split(",")[1]
        }
        const res = await axios.put(`/api/User/update`, {
            id,
            name,
            image,
            "roleId": role,
            "departmentId": dep,
            "jobTitle":job,
        });
        if(res.status===200){
            msg("success","Info updated successfully, please log in to see your new info")
            dispatch(resetState())
            window.location.pathname = `login`;
        }
        else {
            msg("error","Please Try Again")
        }
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
                {/* <TextField
                required
                id="standard-search"
                label="Phone"
                type="text"
                variant="standard"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                inputProps={{ maxLength: 11,minLength:11 }}
                sx={{mb:1}}
                /> */}
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
                <Image src={picture} alt="" id={picture}/>
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