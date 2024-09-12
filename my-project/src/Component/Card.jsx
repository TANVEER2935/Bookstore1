import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card1 from './Card1';
import axios from 'axios';

export default function Card() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        setBooks(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
        setError('Failed to fetch books');
      }
    };
    getBooks();
  }, []);

  // Filter books by category
  const filteredBooks = books.filter((book) => book.Catageroy  === "free");
console.log(filteredBooks);
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
          slidesToShow: 3,
          slidesToScroll: 3,
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

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-xl pb-2">Free Courses Offered!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta natus, eaque veniam voluptate quia, ipsum commodi cupiditate quae sit impedit molestias ut. Quod voluptates blanditiis mollitia, minus id impedit!
          </p>
        </div>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="slider-container">
            <Slider {...settings}>
              {filteredBooks.map((item) => (
                <Card1 item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </>
  );
}
