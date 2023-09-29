import { getPlatformReviews, useAppSelector } from 'store';

import Slider from 'react-slick';

import { Review } from 'components/Review/Review';

import { useEffect, useState } from 'react';

import { useWindowSize } from 'hooks';

import { countSlidesPerPage, CustomSettingsResponsive } from 'helpers/countSlidesPerPage/countSlidesPerPage';

import { sliderSettings } from './sliderSettings';

import { SliderArrow, SliderArrowsDirection } from '../SliderArrow/SliderArrow';

const customSettingResponsive: CustomSettingsResponsive = {
  breakpoint: 1200,
  slidesToShow: 2,
  responsive: {
    breakpoint: 700,
    slidesToShow: 1,
    responsive: null,
  },
};

export const PlatformReviewList: React.FC = () => {
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  const reviews = useAppSelector(getPlatformReviews);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width) {
      setSlidesPerPage(countSlidesPerPage(width, reviews.length, customSettingResponsive, 3));
    }
  }, [width, reviews.length]);

  return (
    <Slider
      {...sliderSettings}
      slidesToShow={slidesPerPage}
      nextArrow={<SliderArrow direction={SliderArrowsDirection.right} />}
      prevArrow={<SliderArrow direction={SliderArrowsDirection.left} />}
    >
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </Slider>
  );
};
