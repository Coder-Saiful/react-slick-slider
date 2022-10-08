import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <button className="slider_arrow slider_arrow_right"><i className="fa-solid fa-chevron-right"></i></button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <button className="slider_arrow slider_arrow_left"><i className="fa-solid fa-chevron-left"></i></button>
    </div>
  );
}

function BannerSlider() {
  var settings = {
      dots: true,
      arrow: true,
      infinite: true,
      fade: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  return (
        <div className="banner">
        <Slider {...settings}>
          <div className="banner_content">
            <div className="banner_image">
                <img src="images/image1.jpg" alt="" />
            </div>
            <div className="banner_text">
              <h2>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</h2>
            </div>
          </div>
          <div className="banner_content">
            <div className="banner_image">
                <img src="images/image2.jpg" alt="" />
            </div>
            <div className="banner_text">
              <h2>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</h2>
            </div>
          </div>
          <div className="banner_content">
            <div className="banner_image">
                <img src="images/image3.jpg" alt="" />
            </div>
            <div className="banner_text">
              <h2>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</h2>
            </div>
          </div>
          <div className="banner_content">
            <div className="banner_image">
                <img src="images/image4.jpg" alt="" />
            </div>
            <div className="banner_text">
              <h2>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</h2>
            </div>
          </div>
        </Slider>
        </div>
  );
}

export default BannerSlider;
