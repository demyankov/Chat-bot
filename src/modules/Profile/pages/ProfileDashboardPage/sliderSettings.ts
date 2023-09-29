export const sliderSettings = {
  dots: true,
  infinite: true,
  mobileFirst: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
