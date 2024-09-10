import React from 'react'
import list from "../../public/list.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from './Card1';
export default function Card() {
    const flist = list.filter((data) => (data.Catageroy === "free"));
    console.log(flist);
    var settings = {
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
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div className='max-w screen-2xl container mx-auto md:px-20 px-4'>
              <div>
                <h1 className='font-bold text-xl pb-2'>Free course ofered!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta natus, eaque veniam voluptate quia, ipsum commodi cupiditate quae sit impedit molestias ut. Quod voluptates blanditiis mollitia, minus id impedit!</p>
                </div>
            <div>
            <div className="slider-container">
      <Slider {...settings}>
       {flist.map((item)=>(
        <Card1 item={item} key={item.id}/>
       ))}
      </Slider>
    </div>
            </div>
            </div>
        </>
    )
}
