import React from "react";
import paralaxBanner from "../../../assets/home/chef-service.jpg";
import "../PeralaxBanner/PeralaxBanner.css";

const PeralaxBanner = () => {
  return (
    <section>
      <div id="paralax-banner-wrapper">
        <div className="full-width">
          <div
            className="paralax-banner-row"
            style={{
              backgroundImage: `url(${paralaxBanner})`,
              maxHeight: "700px",
              width: "100%",
              objectFit: "cover",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "700px",
              zIndex: 1,
              backgroundAttachment: 'fixed'
            }}
          >
            <div
              className="paralax-banner-bg-image"
              style={{
                position: "relative",
                zIndex: "1",
                height: '100%',
                width: "100%"
              }}
            >
              <div className="paralax-banner-col-12">
                <div className="paralax-banner-content">
                  <h3 className="paralax-banner-heading h3">Bistro Boss</h3>
                  <p className="paralax-banner-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, libero accusamus laborum deserunt ratione
                    dolor officiis praesentium! Deserunt magni aperiam dolor
                    eius dolore at, nihil iusto ducimus incidunt quibusdam
                    nemo."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeralaxBanner;
