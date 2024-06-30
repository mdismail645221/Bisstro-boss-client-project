import Slider from "react-slick";
import '../Collection/collection.css'

import slideImg1 from "../../../assets/home/slide1.jpg";
import slideImg2 from "../../../assets/home/slide2.jpg";
import slideImg3 from "../../../assets/home/slide3.jpg";
import slideImg4 from "../../../assets/home/slide4.jpg";
import slideImg5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle";

const Collection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <>
      <section id="collection-wrapper">
        <div className="container section-padding ">
          <SectionTitle 
          subHeading="---From 11:00am to 10:00pm---" 
          heading="ORDER ONLINE"
          />
          <Slider {...settings}>
            <div className="collection-item relative">
              <img src={slideImg1} alt="slide img" />
              <p className="collection-item-heading">Pizza</p>
            </div>
            <div className="collection-item relative">
              <img src={slideImg2} alt="slide img" />
              <p className="collection-item-heading">Pizza</p>
            </div>
            <div className="collection-item relative">
              <img src={slideImg3} alt="slide img" />
              <p className="collection-item-heading">Pizza</p>
            </div>
            <div className="collection-item relative">
              <img src={slideImg4} alt="slide img" />
              <p className="collection-item-heading">Pizza</p>
            </div>
            <div className="collection-item relative">
              <img src={slideImg5} alt="slide img" />
              <p className="collection-item-heading">Pizza</p>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Collection;
