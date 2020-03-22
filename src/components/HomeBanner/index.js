import React from "react";

import BackgroundImage from "../../assets/images/slider_1.jpg";

function HomeBanner(props) {
  return (
    <div
      className="main_slider"
      style={{
        backgroundImage: `url(${BackgroundImage})`
      }}
      data-aos="fade-up"
    >
      <div className="container fill_height">
        <div className="row align-items-center fill_height">
          <div className="col">
            <div className="main_slider_content" data-aos="fade-right">
              <h6>Spring / Summer Collection 2017</h6>
              <h1>Get up to 30% Off New Arrivals</h1>
              <div className="red_button shop_now_button">
                <a href="#">shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
