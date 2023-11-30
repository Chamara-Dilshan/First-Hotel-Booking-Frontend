import React, { useState } from 'react'
import './IconBar1.css'
import { Button, Stack, Typography } from '@mui/material';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WifiIcon from '@mui/icons-material/Wifi';
import WavesIcon from '@mui/icons-material/Waves';
import PoolIcon from '@mui/icons-material/Pool';

export default function IconBar1() {
    const [showMore, setShowMore] = useState(false);
    const data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    return (
        <div>
            <div className='IconBar1'>
                <div className='BedroomChildIcon'>
                    <BedroomChildIcon sx={{ fontSize: 45, color: '#666666' }} />
                    <Typography style={{ color: "#666666", fontSize: 12, paddingLeft: 3 }}>Rooms</Typography>
                </div>
                <div className='RestaurantIcon'>
                    <RestaurantIcon sx={{ fontSize: 45, color: '#666666', paddingLeft: 8 }} />
                    <Typography style={{ color: "#666666", fontSize: 12, paddingLeft: 59 }}>Restaurant</Typography>
                </div>
                <div className='LocalParkingIcon'>
                    <LocalParkingIcon sx={{ fontSize: 45, color: '#666666', paddingLeft: 8 }} />
                    <Typography style={{ color: "#666666", fontSize: 12, paddingLeft: 62 }}>Parking</Typography>
                </div>
                <div className='WifiIcon'>
                    <WifiIcon sx={{ fontSize: 45, color: '#666666', paddingLeft: 8 }} />
                    <Typography style={{ color: "#666666", fontSize: 12, paddingLeft: 75 }}>Wifi</Typography>
                </div>
                <div className='WavesIcon'>
                    <WavesIcon sx={{ fontSize: 45, color: '#666666', paddingLeft: 8 }} />
                    <Typography style={{ color: "#666666", fontSize: 12, paddingLeft: 45 }}>Air Conditioner</Typography>
                </div>
                <div className='PoolIcon'>
                    <PoolIcon sx={{ fontSize: 45, color: '#666666', paddingLeft: 8 }} />
                    <Typography Typography style={{ color: "#666666", fontSize: 12, paddingLeft: 44 }}>Swimming Pool</Typography>
                </div>
            </div>
            <Stack direction="row" spacing={2}>
                <Button style={{ backgroundColor: "#c7c5c5", left: 270, color: '#666666', marginTop: 20 }} className='Request_facilities-btn' variant="contained" href='/Request facilities'>Request facilities</Button>
            </Stack>
            <div className='Discription'>
                <Typography style={{ color: "black", fontSize: 20, paddingTop: 5 }}>Hotel Discription</Typography>
                <div className="desc-content">
                    <Typography style={{ color: "black", fontSize: 14, paddingTop: 3 }}>
                        {showMore ? data : `${data.substring(0, 250)}...`}
                    </Typography>
                </div>
                <button className='read-more-btn' onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Show Less <' : 'Show more >'}
                </button>
            </div>
        </div>
    )
}
