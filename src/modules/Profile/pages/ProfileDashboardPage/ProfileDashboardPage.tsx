// import { Pagination, PlatformProfileList, ProfilePlatformCard } from 'components';
// import { useState } from 'react';
// import // deleteFavoritePlatform,
// getFavoritePlatforms,
// getVisitedPlatforms,
// useAppDispatch,
// useAppSelector,
// 'store';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import styles from './styles.module.scss';
// import { sliderSettings } from './sliderSettings';

export const ProfileDashboardPage = () => (
  // const dispatch = useAppDispatch();
  // const favorites = useAppSelector(getFavoritePlatforms);
  // const visitedPlatforms = useAppSelector(getVisitedPlatforms);
  // const [currentPage, setCurrentPage] = useState(1);
  // const ELEMENT_FOR_PAGE = 4;
  // const lastIndexElement = currentPage * ELEMENT_FOR_PAGE;
  // const firstIndexElement = lastIndexElement - ELEMENT_FOR_PAGE;
  // const handlePageChange = (pageNumber: number) => {
  //   setCurrentPage(pageNumber);
  //   window.scrollTo(0, 0);
  // };
  // const deleteFavorite = (id: string) => dispatch(deleteFavoritePlatform(id));
  <div className={styles.wrapper}>
    Profile
    {/* {favorites.length > 0 && (
        <>
          <PlatformProfileList
            platforms={favorites.slice(firstIndexElement, lastIndexElement)}
            isAuth
            onFavorite={deleteFavorite}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(favorites.length / ELEMENT_FOR_PAGE)}
            onPageChange={handlePageChange}
          />
        </>
      )}
      {visitedPlatforms.length > 0 && (
        <Slider {...sliderSettings}>
          {visitedPlatforms.map((platform) => (
            <ProfilePlatformCard isAuth={false} onFavorite={() => {}} {...platform} />
          ))}
        </Slider>
      )} */}
  </div>
);
