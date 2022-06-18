import { Box, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    "the entrepreneur's experience in this field", "innovative product/service", "high profit margin", "high growth potential", "superior customer support", "quality and affordable products/service"," high demand in the target market (forward linkage)", "abundant supply of raw materials (backward linkage)", "wide range of products/services", "robust value-chain of the business, frequency of customer visits"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Home() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [data,setData]=useState({
        business_stage:"",
        age_of_establishment:"",
        offered_to:"",
        primary_product_service_offered:"",
        secondary_product_service_offered:"",
        processed_products:"",
        relevant_experience:"",
        skill_training:"",
        establishment_type:"",
        usp:[...personName],
        business_area:"",
        business_locality:"",
        infra_ownership:"",
        establishment_area:""

    })
console.log(data.usp);
    const formHandler=(e)=>{
        let {name,value}=e.target;
       setData({...data,[name]:value})
    }
   
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      setData({...data,usp:[...personName]})
    };
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
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"10px"}}>
   <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Unique Selling Proposition</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>


   <FormControl  sx={{width:"250px"}}>
        <InputLabel id="demo-simple-select-label">Establishment type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={data.establishment_type}
          label="Age"
          onChange={(e)=>{
            setData({...data,establishment_type:e.target.value})
          }}
        
        >
          <MenuItem value={"Factory"}>Factory</MenuItem>
          <MenuItem value={"Mill"}>Mill</MenuItem>
          <MenuItem value={"Stall"}>Stall</MenuItem>
          <MenuItem value={"Workshop"}>Workshop</MenuItem>
          <MenuItem value={"Boutique"}>Boutique</MenuItem>
          <MenuItem value={"Vehicle"}>Vehicle</MenuItem>
          <MenuItem value={"Centre"}>Centre</MenuItem>
          <MenuItem value={"Store"}>Store</MenuItem>
          <MenuItem value={"Farm"}>Farm</MenuItem>
          <MenuItem value={"Plant"}>Plant</MenuItem>
          <MenuItem value={"Processing Unit"}>Processing Unit</MenuItem>
          <MenuItem value={"Shop"}>Shop</MenuItem>
          <MenuItem value={"Vending Cart"}>Vending Cart</MenuItem>
          <MenuItem value={"Manufacturing unit"}>Manufacturing unit</MenuItem>
        </Select>
      </FormControl>
   </Box>
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"10px"}}>
   <TextField variant='outlined' name='business_area' type={"text"} label="Name of the area" onChange={formHandler} />
   <FormControl  sx={{width:"250px"}}>
        <InputLabel id="demo-simple-select-label">Locality of business</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={data.business_locality}
          label="Age"
          onChange={(e)=>{
            setData({...data,business_locality:e.target.value})
          }}
        >
          <MenuItem value={"Urban"}>Urban</MenuItem>
          <MenuItem value={"Rural"}>Rural</MenuItem>
          <MenuItem value={"Semi-urban"}>Semi-urban</MenuItem>
          <MenuItem value={"Slum"}>Slum</MenuItem>
        </Select>
      </FormControl>
     
   </Box>
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"10px"}}>
   
   <FormControl  sx={{width:"250px"}}>
        <InputLabel id="demo-simple-select-label">Ownership of infrastructure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={data.infra_ownership}
          label="Age"
          onChange={(e)=>{
            setData({...data,infra_ownership:e.target.value})
          }}
        >
          <MenuItem value={"Rented"}>Rented</MenuItem>
          <MenuItem value={"Leased"}>Leased</MenuItem>
          <MenuItem value={"Self-owned"}>Self-owned</MenuItem>
        </Select>
      </FormControl>
      <TextField variant='outlined' name='establishment_area' type={"number"} label="Establishment area (in square feet) (Enter 0 if the establishment area is irrelevant)" onChange={formHandler} />
   </Box>
  </Box>
  <Box  sx={{width:"48%" ,height:"100%",border:"1px solid green"}}>
  <Typography>

{`Samsung is looking for ${data.business_stage} their business of Electronis and Communications.This enterpise has been operation since ${data.age_of_establishment} years and has been serving it's customers since then.This establishment offers products/services like ${data.primary_product_service_offered} to ${data.offered_to}. In addition, the enterprise shall also be involved in ${data.secondary_product_service_offered}.Other products of the enterprice shall include ${data.processed_products}.Jhon has relevant experience of ${data.relevant_experience}.The entrepreneur ${data.skill_training} in this field of work.The enterprise is uniquely positioned because of its - ${data.usp.join(" ,")}.The ${data.establishment_type} is located in ${data.business_locality} area of Boston in a ${data.infra_ownership} property.`}
</Typography>
    </Box>

  </Box>
  </>
  )
}