import { Box, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Home() {
    const [data,setData]=useState({
        business_stage:"",
        age_of_establishment:"",
        offered_to:"",
        primary_product_service_offered:"",
        secondary_product_service_offered:"",
        processed_products:"",
        relevant_experience:"",
        skill_training:""

    })

    const formHandler=(e)=>{
        let {name,value}=e.target;
       setData({...data,[name]:value})
    }
    console.log(data)
  return (
  <>
  <Box sx={{width:"90%" , height:"600px" ,margin:"auto", marginTop:"20px" , border:"1px solid red" , boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" , display:"flex", justifyContent:"space-between" ,gap:"6px"}} >
  
  <Box sx={{width:"50%" ,height:"100%" , border:"1px solid green",padding:"10px" }}>
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"10px"}}>
   <FormControl  sx={{width:"250px"}}>
        <InputLabel id="demo-simple-select-label">Stage of business</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={data.business_stage}
          label="Age"
          onChange={(e)=>{
            setData({...data,business_stage:e.target.value})
          }}
        >
          <MenuItem value={"Start-up"}>Start-up</MenuItem>
          <MenuItem value={"Scale-up"}>Scale-up</MenuItem>
        </Select>
      </FormControl>
      <TextField variant='outlined' name='age_of_establishment' type={"number"} label="Age of establishment(years)" onChange={formHandler} />
   </Box>
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" ,marginBottom:"10px"}}>
   <FormControl  sx={{width:"250px"}}>
        <InputLabel id="demo-simple-select-label">Offered to</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={data.offered_to}
          label="Age"
          onChange={(e)=>{
            setData({...data,offered_to:e.target.value})
          }}
        >
          <MenuItem value={"End customers"}>End customers</MenuItem>
          <MenuItem value={"Wholesalers"}>Wholesalers</MenuItem>
          <MenuItem value={"Distributors"}>Distributors</MenuItem>
          <MenuItem value={"Retailers"}>Retailers</MenuItem>
        </Select>
      </FormControl>
      <TextField variant='outlined' name='primary_product_service_offered' type={"text"} label="Primary Products/Services offered" onChange={formHandler} />
   </Box>
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" ,marginBottom:"10px"}}>
      <TextField variant='outlined' name='secondary_product_service_offered' type={"text"} label="Secondary Products/Services offered" onChange={formHandler} />
      <TextField variant='outlined' name='processed_products' type={"text"} label="Processed Products(Product you produce from the raw materials)" onChange={formHandler} />
   </Box>
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"10px"}}>
   <FormControl  sx={{width:"250px"}}>
        <InputLabel id="demo-simple-select-label">Skill training</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={data.skill_training}
          label="Age"
          onChange={(e)=>{
            setData({...data,skill_training:e.target.value})
          }}
        >
          <MenuItem value={"No formal skill training"}>No formal skill training</MenuItem>
          <MenuItem value={"Has formal skill training and certificate"}>Has formal skill training and certificate</MenuItem>
        </Select>
      </FormControl>
      <TextField variant='outlined' name='relevant_experience' type={"number"} label="Years of relevant experience in this field" onChange={formHandler} />
   </Box>

  </Box>
  <Box  sx={{width:"48%" ,height:"100%",border:"1px solid green"}}>
  <Typography>

{`Samsung is looking for ${data.business_stage} their business of Electronis and Communications.This enterpise has been operation since ${data.age_of_establishment} years and has been serving it's customers since then.This establishment offers products/services like ${data.primary_product_service_offered} to ${data.offered_to}. In addition, the enterprise shall also be involved in ${data.secondary_product_service_offered}.Other products of the enterprice shall include ${data.processed_products}.Jhon has relevant experience of ${data.relevant_experience}.The entrepreneur ${data.skill_training} in this field of work`}
</Typography>
    </Box>

  </Box>
  </>
  )
}
