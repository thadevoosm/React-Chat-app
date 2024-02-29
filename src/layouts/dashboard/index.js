import React, { useState } from "react";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import {useTheme} from "@mui/material/styles";
import Logo  from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";

const DashboardLayout = () => {

  const theme = useTheme();

  const [selected, setSelected] = useState(0);
  console.log(theme);

  return (
    <>
       <Box
       p={2}
        sx={
          {
            backgroundColor : theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgb(0,0,0,0.25)",
            width: 100, 
            height: '100vh',
            overflowX:'hidden',
          }
        }
      >
        <Stack direction= "column" alignItems={"center"} spacing={3} justifyContent={"space-between"}
         sx ={{
          height:'100%',
         }}
         >
          <Stack alignItems={"center"} spacing={4}>
      <Box sx={{
        backgroundColor: theme.palette.primary.main,
        height: 64,
        width : 64,
        borderRadius: 1.5,
      }}
      >
        <img src={Logo} alt="chat app logo"/>

      </Box>
      <Stack sx={{width: 'max-content',}} 
            direction="column" 
            alignItems='center' 
            spacing={3}>
        {Nav_Buttons.map((ka)=>(
          ka.index === selected?
        <Box 
        p={1}
        sx={{
          backgroundColor:theme.palette.primary.main,
          borderRadius: 1.5,
        }}>
        <IconButton sx={{width: "max-content", color: 'white',}} key={ka.index}>{ka.icon}</IconButton>
        </Box>
        :<IconButton onClick={()=>{
            setSelected(ka.index)
        }}
         sx={{width: "max-content", color: 'black',}} key={ka.index}>{ka.icon}</IconButton>
        ))}
      </Stack>

      <Divider  sx={{width: '48px', backgroundColorcolor: 'black'}}/>
       {selected ===3 ?
       <Box
       p={1}
       sx={{
         backgroundColor:theme.palette.primary.main,
         borderRadius: 1.5,
       }}>
       <IconButton  sx={{width: "max-content", color: 'white',}}>
        <Gear />
      </IconButton>
       </Box>
       :<IconButton  onClick={()=>{
        setSelected(3);
       }} sx={{width: "max-content", color: 'black',}}>
        <Gear />
      </IconButton>
      }
      </Stack>
      </Stack>
      <Stack >
        <Avatar src={faker.image.avatar()} />
      </Stack >
      </Box> 
      <Outlet/>
    </>
  );
};

export default DashboardLayout;
