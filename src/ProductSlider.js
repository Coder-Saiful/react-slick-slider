import Slider from "react-slick";

import React from 'react';

const ProductSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: "0",
        swipeToSlide: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className="row gy-5 product_slider">
            <Slider {...settings}>
            <div className="col-lg-3 col-md-4 col-sm-6 product">
                <div className="p-3 border bg-light">
                    <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png" alt="" />
                    <h3>Yantiti Leather & Canvas Bags</h3>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 product">
                <div className="p-3 border bg-light">
                    <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png" alt="" />
                    <h3>Yantiti Leather & Canvas Bags</h3>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 product">
                <div className="p-3 border bg-light">
                    <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png" alt="" />
                    <h3>Yantiti Leather & Canvas Bags</h3>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 product">
                <div className="p-3 border bg-light">
                    <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png" alt="" />
                    <h3>Yantiti Leather & Canvas Bags</h3>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 product">
                <div className="p-3 border bg-light">
                    <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png" alt="" />
                    <h3>Yantiti Leather & Canvas Bags</h3>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 product">
                <div className="p-3 border bg-light">
                    <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png" alt="" />
                    <h3>Yantiti Leather & Canvas Bags</h3>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 product">
                <div className="p-3 border bg-light">
                    <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png" alt="" />
                    <h3>Yantiti Leather & Canvas Bags</h3>
                </div>
            </div>
            </Slider>
        </div>
    );
};

export default ProductSlider;