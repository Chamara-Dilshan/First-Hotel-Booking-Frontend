import React from 'react'
import { Typography, Button, Stack } from '@mui/material';
import './Navi3.css' ;
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Navi3() {
  return (
    <div>
        <div className='Navi31'>
            <Typography style={{color: "black", fontSize: 30, paddingRight:20}} className="Navi2ella" > Ella Resort </Typography>
            <div className='Navi311' style={{paddingTop:15}}>
                <StarIcon sx={{ fontSize: 15, paddingTop:0.3, paddingRight:0.4, color: 'gold'}} />
                <Typography style={{color: "black", fontSize: 15}}> 8.9 </Typography>
                <Typography style={{color: "black", fontSize: 15, paddingLeft: 25, paddingRight:15}}> 58 reviews </Typography>
                <ShareIcon sx={{ fontSize: 15, paddingTop:0.3, paddingRight:0.4, color: '#00D0D0' }} />
                <Typography style={{fontSize: 15, color:'#666666'}}> Share </Typography>
                </div>
            <Typography style={{fontSize: 15, color:'black', paddingLeft:770}}> Listed By </Typography>

        </div>
        <div className='Navi32'>
            <Typography style={{color: "black", fontSize: 15}}> 260, Common Street, Sri Lanka </Typography>
            <FavoriteBorderIcon sx={{ fontSize: 15, paddingTop:0.3, paddingLeft:13.8, color: '#00D0D0' }} />
            <Typography style={{fontSize: 15, color:'#666666', paddingLeft:0.4}}> Add to Watchlist </Typography>
            <Stack direction="row" spacing={2}>
            <Button style={{backgroundColor: "#00D0D0", left: 700, color:'#264653'}} className='P_and_S Holdings-btn' variant="contained" href='/P & S Holdings'>P & S Holdings</Button>
            </Stack>
        </div>
 
    </div>
  )
}
