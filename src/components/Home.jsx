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

const locationNames=["Nearness to market"," Good footfall", "Nearness to source of raw materials", "Nearness to targeted customer demographics", "Lesser competition around", "Access to permit/license of operate"," Nearness to suppliers"," Affordability (rent)", "No rental overheads", "Other such factors"];
const marketings=["Distribution of marketing material (pamphlets/flyers)", "storefront/business branding", "Seasonal discounts and offers"," Cross-promotion, Digital Marketing"," Word of mouth" ];

const scalings=["increasing the variety of product/service offering", "expanding the current offering to other geographies", "opening more outlets", "growing the scale of operation", "building value-chain integrations", "other allied revenue streams"]

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
    const [location, setLocation] = React.useState([]);
    const [market, setMarket] = React.useState([]);
    const [scaleup, setScaleup] = React.useState([]);
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
        establishment_area:"",
        reason_for_location:[],
        market_research:"",
        primary_market:"",
        customers:"",
        seasonality:"",
        competition:"",
        marketing_avenues:[],
        suppliers:"",
        scaleup_potential:[]

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
    const handleChange2 = (event) => {
      const {
        target: { value },
      } = event;
      setLocation(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      setData({...data,reason_for_location:[...location]})
    };
    const handleChange3 = (event) => {
      const {
        target: { value },
      } = event;
      setMarket(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      setData({...data,marketing_avenues:[...market]})
    };
    const handleChange4 = (event) => {
      const {
        target: { value },
      } = event;
      setScaleup(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      setData({...data,scaleup_potential:[...scaleup]})
    };
    console.log(data)
  return (
  <>
  <Box sx={{width:"98%" , height:"950px" ,margin:"auto", marginTop:"30px"  , boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" , display:"flex", justifyContent:"space-between" ,gap:"15px" }} >
  
    {/* form input box */}
  <Box sx={{width:"50%" ,height:"100%" ,padding:"15px" }}>
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"15px"}}>
   <FormControl  sx={{width:"300px"}}>
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
      <TextField variant='outlined' name='age_of_establishment' type={"number"} label="Age of establishment(years)" onChange={formHandler} sx={{width:"300px"}} />
   </Box>
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" ,marginBottom:"15px"}}>
   <FormControl  sx={{width:"300px"}}>
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
      <TextField variant='outlined' name='primary_product_service_offered' type={"text"} label="Primary Products/Services offered" onChange={formHandler} sx={{width:"300px"}} />
   </Box>
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" ,marginBottom:"15px"}}>
      <TextField variant='outlined' name='secondary_product_service_offered' type={"text"} label="Secondary Products/Services offered" onChange={formHandler} sx={{width:"300px"}}/>
      <TextField variant='outlined' name='processed_products' type={"text"} label="Processed Products(Product you produce from the raw materials)" onChange={formHandler} sx={{width:"300px"}} />
   </Box>
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"15px"}}>
   <FormControl  sx={{width:"300px"}}>
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
      <TextField variant='outlined' name='relevant_experience' type={"number"} label="Years of relevant experience in this field" onChange={formHandler} sx={{width:"300px"}} />
   </Box>
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"15px"}}>
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


   <FormControl  sx={{width:"300px"}}>
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
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"15px"}}>
   <TextField variant='outlined' name='business_area' type={"text"} label="Name of the area" onChange={formHandler} sx={{width:"300px"}}/>
   <FormControl  sx={{width:"300px"}}>
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
   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"15px"}}>
   
   <FormControl  sx={{width:"300px"}}>
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
      <TextField variant='outlined' name='establishment_area' type={"number"} label="Establishment area (in square feet) (Enter 0 if the establishment area is irrelevant)" onChange={formHandler} sx={{width:"300px"}} />
   </Box>

   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"15px"}}>
   <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Reason for selecting this location</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={location}
          onChange={handleChange2}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {locationNames.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, location, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>


   <FormControl  sx={{width:"300px"}}>
        <InputLabel id="demo-simple-select-label">Market research</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={data.market_research}
          label="Age"
          onChange={(e)=>{
            setData({...data,market_research:e.target.value})
          }}
        
        >
          <MenuItem value={"Not conducted"}>Not conducted</MenuItem>
          <MenuItem value={"Market research has been conducted"}>Market research has been conducted</MenuItem>
          
    
        </Select>
      </FormControl>
   </Box>

   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"15px"}}>
   
   <FormControl  sx={{width:"300px"}}>
        <InputLabel id="demo-simple-select-label">Primary market</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={data.primary_market}
          label="Age"
          onChange={(e)=>{
            setData({...data,primary_market:e.target.value})
          }}
        >
          <MenuItem value={"Local"}>Local</MenuItem>
          <MenuItem value={"Regional"}>Regional</MenuItem>
          <MenuItem value={"National"}>National</MenuItem>
          <MenuItem value={"International"}>International</MenuItem>
        </Select>
      </FormControl>
      <TextField variant='outlined' name='customers' type={"text"} label="Customers" onChange={formHandler} sx={{width:"300px"}} />
   </Box>

   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"15px"}}>
   
   <FormControl  sx={{width:"300px"}}>
        <InputLabel id="demo-simple-select-label">Seasons of high sales</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={data.seasonality}
          label="Age"
          onChange={(e)=>{
            setData({...data,seasonality:e.target.value})
          }}
        >
          <MenuItem value={"Consistent sales across all seasons"}>Consistent sales across all seasons</MenuItem>
          <MenuItem value={"Higher sales in festive seasons"}>Higher sales in festive seasons</MenuItem>
          <MenuItem value={"High sales in cropping/cultivation season"}>High sales in cropping/cultivation season</MenuItem>
          <MenuItem value={"High sales in peak seasons"}>High sales in peak seasons</MenuItem>
        </Select>
      </FormControl>
      <FormControl  sx={{width:"300px"}}>
        <InputLabel id="demo-simple-select-label">Competition</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={data.competition}
          label="Age"
          onChange={(e)=>{
            setData({...data,competition:e.target.value})
          }}
        >
          <MenuItem value={" No similar goods/service provider in this locality"}> No similar goods/service provider in this locality</MenuItem>
          <MenuItem value={"Only a few similar goods/service providers in this locality"}>Regional</MenuItem>
          <MenuItem value={"Many similar goods/service providers in this locality"}>Many similar goods/service providers in this locality</MenuItem>
        </Select>
      </FormControl>
   </Box>

   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"15px"}}>
   <TextField variant='outlined' name='suppliers' type={"text"} label="List of Suppliers" onChange={formHandler}  sx={{width:"300px"}}/>
   <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Marketing avenues</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={market}
          onChange={handleChange3}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {marketings.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, market, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

   
   </Box>

   <Box sx={{ width:"100%",display:"flex",justifyContent:"space-evenly", flexWrap:"wrap" , marginBottom:"15px"}}>
   <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Avenues of scaling up in future</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={scaleup}
          onChange={handleChange4}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {scalings.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, scaleup, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

   
   </Box>
  </Box>

      {/* Sentence box */}
  <Box  sx={{width:"48%" ,height:"100%",
    padding:"15px",
    overflow: "auto"
 

}}>
  <Typography sx={{fontFamily:"revert" , fontSize:"18px" , fontWeight:"normal" ,
 lineHeight:"2" , wordSpacing:"4.5px"
}}>

{`Samsung is looking for ${data.business_stage} their business of Electronis and Communications.This enterpise has been operation since ${data.age_of_establishment} years and has been serving it's customers since then.This establishment offers products/services like ${data.primary_product_service_offered} to ${data.offered_to}. In addition, the enterprise shall also be involved in ${data.secondary_product_service_offered}.Other products of the enterprice shall include ${data.processed_products}.Jhon has relevant experience of ${data.relevant_experience}.The entrepreneur ${data.skill_training} in this field of work.The enterprise is uniquely positioned because of its - ${data.usp.join(" ,")}.The ${data.establishment_type} is located in ${data.business_locality} area of Boston in a ${data.infra_ownership} property.The size of the establishment is ${data.establishment_area} sq.ft.This locality is selected because of ${data.reason_for_location}.${data.market_research }and the range of products and target market has been identified after that.The enterprise shall focus on offering its products/services to ${data.primary_market} markets. Our customers shall include- ${data.customers}.The nature of the business is such that we expect ${data.seasonality}.Regarding competition, there are ${data.competition}.The enterprise shall procure goods/raw materials from ${data.suppliers}.Our marketing avenues to reach the targeted customers shall include- ${data.marketing_avenues}.The various foreseeable avenues of scaling up and growing the business in the foreseeable future include- ${data.scaleup_potential}.`}
</Typography>
    </Box>

  </Box>
  </>
  )
}
