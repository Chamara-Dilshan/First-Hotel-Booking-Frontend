import React, { useState } from 'react'
import './Photo_gallery.css'
import Hotel1 from "../../Image/1.jpg"
import Hotel2 from "../../Image/2.jpeg"
export default function Photo_gallery() {
 const imgs =[
{id:0,value:Hotel1},
{id:1,value:Hotel2},
{id:2,value:Hotel1},
{id:4,value:Hotel2},
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
