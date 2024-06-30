import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "../BannerFeature/BannerFeature.css";

const BannerFeature = () => {
  return (
    <section id="banner-Feature-wrapper">
      <div className="full-width">
        <div
          className="banner-feature-row"
          style={{
            backgroundImage: `url(${featuredImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "750px",
            objectFit: "cover",
            position: "relative",
            zIndex: "1",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="banner-feature-col-12">
            <div className="banner-feature-content-wrapper flex flex-col gap-3">
              <div className="banner-feature-top">
                <SectionTitle
                  heading={"FROM OUR MENU"}
                  subHeading={"---Check it out---"}
                />
              </div>
              <div className="banner-feature-bottom">
                <div className="banner-feature-body flex justify-between gap-10">
                  <div className="banner-feature-image-block basis-[48%]">
                    <img
                      style={{ width: "100", height: "100%" }}
                      src={featuredImg}
                      alt="featuredImg"
                    />
                  </div>
                  <div className="banner-feature-content-box flex flex-col gap-3 basis-[48%]">
                    <h5 className="banner-feature-date">March 20, 2023</h5>
                    <h4 className="banner-feature-title">
                      WHERE CAN I GET SOME?
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error voluptate facere, deserunt dolores maiores quod
                      nobis quas quasi. Eaque repellat recusandae ad laudantium
                      tempore consequatur consequuntur omnis ullam maxime
                      tenetur.
                    </p>
                    <div className="banner-feature-btn">
                      <a href="#" className="btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFeature;
