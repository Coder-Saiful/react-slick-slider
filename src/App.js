import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import BannerSlider from "./BannerSlider";
import ProductSlider from "./ProductSlider";

function App() {
  return (
    <div className="App">
      <div className="overflow-hidden">
        <BannerSlider />
      </div>
      <div className="container ps_container">
        <h2 className="product_slider_title">Product Slider</h2>
        <ProductSlider />
      </div>
    </div>
  );
}

export default App;
