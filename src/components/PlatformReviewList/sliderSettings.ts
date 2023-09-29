export const sliderSettings = {
  dots: false,
  infinite: true,
  mobileFirst: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToScroll: 1,
      },
    },
  ],
};
