import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogSliderCards from "../../data/blogSliderCard.json";

function SampleNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "green", borderRadius: "0 50% 50% 0" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "green", borderRadius: "50% 0 0 50%" }}
      onClick={onClick}
    />
  );
}

const BlogSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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

  console.log(blogSliderCards, "blog data");

  return (
    <div className="blog-slider-wrapper">
      {/* ... Rest of your code ... */}
      <Slider {...settings}>
        {blogSliderCards.map((sliderCard) => (
          <div key={sliderCard.id} className="slider-item">
            <div className="blog-card">
              <div className="blog-card-image">
                <img src={sliderCard.cardImage} alt="Blog Card Icon" />
              </div>
              <div className="card-content-wrapper">
                <h5 className="card-heading">{sliderCard.category}</h5>
                <div className="card-slider-content">
                  <div className="card-date">
                    <img className="card-calendar" src={sliderCard.calenderImage} alt="" />
                    <p className="card-paragraph">{sliderCard.date}</p>
                  </div>
                  <div className="card-comment">
                    <img src={sliderCard.chatImage} alt="" />
                    <p className="card-paragraph">{sliderCard.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
