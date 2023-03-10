import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardC from "./CardC";
import CardA from "./CardA";
import CardE from "./CardE";
import Cardl from "./CardL";
export default function SimpleSlide() {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    
    return(
        <div className="Slide">
            <Slider {...settings}>
                 <CardE
                     title="Personnaliser son CV"
                     imageUrl="https://thumbs.dreamstime.com/b/espace-de-travail-bureau-avec-le-carnet-vide-stylo-la-feuille-papier-et-l-ordinateur-portable-sur-table-en-bois-les-couleurs-doux-109641669.jpg"
                     body="Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus ut mi."
                     date="22 novembre 2022"
                     imageA="https://cdn-icons-png.flaticon.com/512/4705/4705847.png"
                 />   
                <CardA
                     title="Préparer son pitch"
                     imageUrl="data:image/jpeg;base64,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"
                     body="Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus ut mi"
                     date="10 novembre 2022"
                     imageA="https://cdn-icons-png.flaticon.com/512/4705/4705847.png"
                 />
                 <CardC
                     title="Personnaliser son CV"
                     imageUrl="https://cdn.create.vista.com/api/media/medium/224638052/stock-photo-office-desk-laptop-blank-sheet?token="
                     body="Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus ut mi."
                     date="22 novembre 2022"
                     imageA="https://cdn-icons-png.flaticon.com/512/4705/4705847.png"
                 />
                 <Cardl
                     title="Préparer son pitch"
                     imageUrl="https://f.hellowork.com/edito/sites/3/2022/01/AdobeStock_408315933-1-1-722x587.jpeg?v=1644350896"
                     body="Lorem ipsum dolor sit amet consectetur. Libero laoreet at sed cursus ut mi"
                     date="10 novembre 2022"
                     imageA="https://cdn-icons-png.flaticon.com/512/4705/4705847.png"
                 />
            </Slider>
        </div>
    )
}

