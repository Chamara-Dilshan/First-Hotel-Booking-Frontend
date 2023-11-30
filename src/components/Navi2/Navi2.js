import React from 'react'
import './Navi2.css'
import { Button, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
export default function Navi2() {
  return (
    <div>
      <div className="Navi2">
        <Typography style={{color: "black", fontSize: 30 }} className="Navi2ella" >Ella Resort</Typography>
        <Stack direction="row" spacing={2}>
          <Button style={{backgroundColor: "#264653", position: "relative", left: 700}} className='Discounts_Offers-btn' variant="contained" href='/Discounts & Offers'>Discounts & Offers</Button>
        </Stack>
      </div>
      <div className="StarIconLine">
        <StarIcon sx={{ fontSize: 15, paddingTop:0.3, paddingRight:0.4, color: 'gold' }} />
        <Typography style={{color: "black", fontSize: 15}}>8.9 - 58 reviews</Typography>
      </div>
    </div>
    )
}