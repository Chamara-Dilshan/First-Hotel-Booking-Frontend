import React from 'react'
import './Booking_hotel.css'
import NavBar from '../../components/Navigation/NavBar';
import Navi1 from '../../components/Navi1/Navi1';
import Navi2 from '../../components/Navi2/Navi2';
import PhotoGallery from '../../components/Photo_gallery/Photo_gallery';
import Navi3 from '../../components/Navi3/Navi3';
import IconBar1 from '../../components/IconBar1/IconBar1';
import LReviews from '../../components/LReviews/LReviews';
import RReserve from '../../components/RReserve/RReserve';
import Footer from '../../components/Footer/Footer';

export default function Booking_hotel() {
    return (
        <div>
            <NavBar />
            <Navi1 />
            <Navi2 />
            <PhotoGallery />
            <Navi3 />
            <IconBar1 />
            
            <div className="LReviews_RReserve">
                <LReviews />
                <RReserve />
            </div>
            <Footer />
        </div>
    )
}
