import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import { Container, Image, MyBox, MyBox2, MyContainer, MySelect, WebCam } from "./style";
import { useCallback, useRef, useState } from "react";
import useReg from "./regServer";
import { SetMyId, setlastId, stmyname } from "../../Redux/dataSlice";
import { useDispatch } from "react-redux";

const videoConstraints = {
//   width: 300,
//   height: 300,
  facingMode: 'user',
}

export default function Reg(){
    const[data,setdata]=useState()
    const[name,setName]=useState('')
    const[roleId,setRole]=useState('')
    const[departmentId,setDep]=useState('')
    const[jobTitle,setJob]=useState('')
    // const[phone,setPhone]=useState('')
    var departments=["Application","IT","IS","Markiting"]
    departments = departments.map((str,index) => ({ value: index+1, label: str }));
    var roles=["User","Admin"]
    roles = roles.map((str,index) => ({ value: index+1, label: str }));
    const Dep = (value) => {
        setDep(value)
      };
    const Role = (value) => {
        setRole(value)
    };

    const dispatch=useDispatch()
    const webcamRef = useRef(null)
    const [picture, setPicture] = useState('')

    const capture = useCallback(() => {
        const pictureSrc = webcamRef.current.getScreenshot()
        setPicture(pictureSrc)
      })
    const login=async ()=>{
     
            window.location.pathname = 'login'
    }
    const [error , data2, statusCode]= useReg(data?.name,data?.image,data?.roleId,data?.departmentId,data?.jobTitle)
    const submit=async ()=>{
            const x={
                "name":name,
                "image":picture.split(",")[1],
                "roleId":roleId,
                "departmentId":departmentId,
                "jobTitle":jobTitle
            }
            setdata(x)
            if(error!==null){
                setPicture("")
            }
            if(statusCode===200){
                await dispatch(SetMyId(data2?.id))
                await dispatch(setlastId(data2?.id))
                await dispatch(stmyname(data2?.name))
                window.location.pathname = `/`;
                console.log("ok")
            }
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
                value={jobTitle}
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
                    placeholder="Department"
                    optionFilterProp="children"
                    onChange={Dep}
                    filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={departments}
                />
                <MySelect
                    showSearch
                    placeholder="Role"
                    optionFilterProp="children"
                    onChange={Role}
                    filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={roles}
                />
                <Box sx={{display:"flex",flexDirection:"row",my:2,justifyContent:"space-between"}}>
                    <Button variant="contained" onClick={submit} >Submit</Button>
                    <Button variant="contained" onClick={login} >
                        login
                        <PhotoCameraOutlinedIcon sx={{p:1}}/>
                    </Button>
                </Box>
            </Box>
        </MyBox>
        <MyBox2 >
                {statusCode===401 &&<Alert severity="error" sx={{mt:2,justifyContent:"center"}}>Try to be clear in image we can't find you </Alert>}
                {statusCode===402&&<Alert severity="error" sx={{mt:2,justifyContent:"center"}}>There are more than one person in the camera, please be alone to enter </Alert>}
                {statusCode===403&&<Alert severity="error" sx={{mt:2,justifyContent:"center"}}>You already have account</Alert>}
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