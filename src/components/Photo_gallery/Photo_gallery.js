import React, { useState } from 'react'
import './Photo_gallery.css'
import Hotel1 from "../../Image/1.jpg"
export default function Photo_gallery() {
 const imgs =[
{id:0,value:Hotel1},
{id:1,value:Hotel1},
{id:2,value:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/141872720.jpg?k=92da40822d04cab19c631e7fe40f2966904fcf2d89fb3a883e73236b2bc80cab"},
{id:3,value:"https://cf.bstatic.com/xdata/imhttps://thumbs.dreamstime.com/z/hotel-room-beautiful-orange-sofa-included-43642330.jpg?w=992ages/hotel/max1024x768/141872768.jpg?k=982445a27cd1799b8a199284ba075c7aa24b3b92b3677a9755a516451b392448"},
{id:4,value:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/68958566.jpg?k=8827dc2c509190d3a581d888137758fdbfe8ce20b4490d39bbc8e1e121cdcbdf&o=&hp=1"},
 ];
 const [sliderData,setsliderData]=useState(imgs[0])
 const handleClick=(index)=>{
    console.log(index);
    const slider=imgs[index];
    setsliderData(slider);
 }
    return (
        <div className='Photo_gallery'>
            <img src={sliderData.value} height="300" width="500" />
                <div className='flex_row'>
                {   
                    imgs.map((data,i)=>
                    <div className='thumbnail'>
                    <img className={sliderData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
                    </div>
                    )
                }
                </div>
        </div>
    );
}
