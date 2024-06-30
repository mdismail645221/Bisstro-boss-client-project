import React from "react";
import SectionTitle from "../../../Components/SectionTitle";

// Slick slider style
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductRec = () => {
  var setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [ChefMenu, setChefMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category == "popular");
        setChefMenu(popularMenu);
      });
  }, []);

  return (
    <section id="product-recomainded-wrapper">
      <div className="container section-padding">
        <div className="product-recomainded-row">
          <SectionTitle
            heading={"CHEF RECOMMENDS"}
            subHeading={"---Should Try---"}
          />
          <div className="product-reco-card-wrapper">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRec;
