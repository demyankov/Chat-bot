export interface CustomSettingsResponsive {
  breakpoint: number;
  slidesToShow: number;
  responsive: CustomSettingsResponsive | null;
}

const countSlidesPerPage = (
  width: number,
  allSlidesCount: number,
  breakpoints: CustomSettingsResponsive,
  defaultCount: number = 4,
): number => {
  let currentBreakpoint = breakpoints;

  while (currentBreakpoint.responsive && width < currentBreakpoint.breakpoint) {
    currentBreakpoint = currentBreakpoint.responsive;
  }

  const count = Math.min(defaultCount, allSlidesCount, currentBreakpoint.slidesToShow);
  return count;
};

export { countSlidesPerPage };
