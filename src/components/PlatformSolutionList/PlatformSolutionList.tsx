import { SolutionCardItem } from 'components/SolutionCard/SolutionCard';

import Slider from 'react-slick';

import { SliderArrow, SliderArrowsDirection } from 'components/SliderArrow/SliderArrow';

import { getUser, useAppSelector, getPlatform, getPlatformSolutions } from 'store';

import { useWindowSize } from 'hooks';

import { useEffect, useState } from 'react';

import { countSlidesPerPage, CustomSettingsResponsive } from 'helpers/countSlidesPerPage/countSlidesPerPage';

import { sliderSettings } from './sliderSettings';

const customSettingResponsive: CustomSettingsResponsive = {
  breakpoint: 1200,
  slidesToShow: 3,
  responsive: {
    breakpoint: 900,
    slidesToShow: 2,
    responsive: {
      breakpoint: 632,
      slidesToShow: 1,
      responsive: null,
    },
  },
};

export const PlatformSolutionList = () => {
  const { isAuth } = useAppSelector(getUser);
  const { platform } = useAppSelector(getPlatform);
  const solutions = useAppSelector(getPlatformSolutions);
  const [slidesPerPage, setSlidesPerPage] = useState(1);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width) {
      setSlidesPerPage(countSlidesPerPage(width, solutions.length, customSettingResponsive));
    }
  }, [width, solutions.length]);

  return (
    <Slider
      {...sliderSettings}
      slidesToShow={slidesPerPage}
      nextArrow={<SliderArrow direction={SliderArrowsDirection.right} />}
      prevArrow={<SliderArrow direction={SliderArrowsDirection.left} />}
    >
      {solutions.map((item) => (
        <SolutionCardItem
          isAuth={isAuth}
          name={item.name}
          key={`review${item.id}`}
          description={item.description}
          isFavorite={item.isFavorite}
          priceMin={item.priceMin}
          platformName={platform.name}
          platformLogoLink={platform.fileUrl}
        />
      ))}
    </Slider>
  );
};
