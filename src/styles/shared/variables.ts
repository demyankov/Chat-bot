import { FontWeight } from './fontWeight';

export const TYPOGRAPHY = {
  desktop: {
    heading1: {
      fontSize: '3rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '3.9rem',
    },
    heading2: {
      fontSize: '2.5rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '3.25rem',
    },
    heading3: {
      fontSize: '2rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '2.6rem',
    },
    heading4: {
      fontSize: '1.75rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '2.45rem',
    },
    heading5: {
      fontSize: '1.25rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.625rem',
    },
    heading6: {
      fontSize: '1rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.3rem',
    },
    extraLargeBold: {
      fontSize: '1.25rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.875rem',
    },
    extraLargeRegular: {
      fontSize: '1.25rem',
      fontWeight: FontWeight.Regular,
      lineHeight: '1.875rem',
    },
    largeBold: {
      fontSize: '1.125rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.63rem',
    },
    largeRegular: {
      fontSize: '1.125rem',
      fontWeight: FontWeight.Regular,
      lineHeight: '1.63rem',
    },
    normalBold: {
      fontSize: '1rem',
      fontWeight: FontWeight.Semibold,
      lineHeight: '1.45rem',
    },
    normalRegular: {
      fontSize: '1rem',
      fontWeight: FontWeight.Regular,
      lineHeight: '1.45rem',
    },
    smallBold: {
      fontSize: '0.875rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.138rem',
    },
    smallRegular: {
      fontSize: '0.875rem',
      fontWeight: FontWeight.Regular,
      lineHeight: '1.138rem',
    },
  },

  tablet: {
    heading1: {
      fontSize: '2.5rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '3.25rem',
    },
    heading2: {
      fontSize: '2rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '2.6rem',
    },
    heading3: {
      fontSize: '1.75rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '2.45rem',
    },
    heading4: {
      fontSize: '1.5rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.95rem',
    },
    heading5: {
      fontSize: '1rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.3rem',
    },
    heading6: {
      fontSize: '0.75rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1rem',
    },
    extraLargeBold: {
      fontSize: '1.25rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.875rem',
    },
    extraLargeRegular: {
      fontSize: '1.25rem',
      fontWeight: FontWeight.Regular,
      lineHeight: '1.875rem',
    },
    largeBold: {
      fontSize: '1rem',
      fontWeight: FontWeight.Semibold,
      lineHeight: '1.45rem',
    },
    largeRegular: {
      fontSize: '1rem',
      fontWeight: FontWeight.Regular,
      lineHeight: '1.45rem',
    },
    normalBold: {
      fontSize: '0.875rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.138rem',
    },
    normalRegular: {
      fontSize: '0.875rem',
      fontWeight: FontWeight.Regular,
      lineHeight: '1.138rem',
    },
    smallBold: {
      fontSize: '0.75rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1rem',
    },
    smallRegular: {
      fontSize: '0.75rem',
      fontWeight: FontWeight.Regular,
      lineHeight: '1rem',
    },
  },

  mobile: {},
} as const;

export const SPACING = {
  desktop: {
    L1: '74px',
    L2: '60px',
    L3: '48px',
    L4: '40px',
    L5: '32px',
    L6: '24px',
    L7: '16px',
    L8: '12px',
    L9: '8px',
    L10: '4px',
  },

  tablet: {
    L1: '56px',
    L2: '48px',
    L3: '40px',
    L4: '32px',
    L5: '24px',
    L6: '20px',
    L7: '16px',
    L8: '12px',
    L9: '8px',
    L10: '4px',
  },

  mobile: {
    L1: '48px',
    L2: '40px',
    L3: '32px',
    L4: '28px',
    L5: '24px',
    L6: '20px',
    L7: '16px',
    L8: '12px',
    L9: '8px',
    L10: '4px',
  },
} as const;

export const colors = {
  fontBase: '#000',
  fontHover: '#4C4C4C',
  fontDisabled: '#B3B3B3',
  fontInvert: '#fff',
  fontSecond: '#3C42BD',
  fontThird: '#326789',
  fontError: '#ee204d',
  fontWarning: '#BCBCBC',
  background: '#fff',
  backgroundInvert: '#161616',
  backgroundBright: '#E16455',
  backgroundButton: '#fff',
  backgroundButtonInvert: '#000',
  backgroundButtonSecondary: '#326789',
  backgroundInactive: '#DEDEDE',
  backgroundFields: '#F2F2F2',
  backgroundFooter: '#F3F7Fa',
  backgroundWarning: '#F8F1E4',
  backgroundReset: '#F9F8FF',
  backgroundButtonHover: '#4C4C4C',
  backgroundButtonHoverSecondary: '#78A6C8',
  backgroundButtonDisabled: '#B3B3B3',
  backgroundCards: '#FFF3E9',
  borderBase: '#000',
  borderInvert: '#fff',
  borderHover: '#4C4C4C',
  backgroundSecondary: '#F3F7Fa',
  borderHoverInput: '#D9D9D9',
  borderFocusedInput: '#556EFE',
  borderFocused: '#556EFE',
  borderWarning: '#FFAA00',
  borderDisabled: '#B3B3B3',
  borderGrid: '#B3B3B3',
  btnForm: '#326789',
  additional: '#556EFE',
} as const;

export enum BREAKPOINT {
  'xs' = '400px',
  'sm' = '576px',
  'md' = '768px',
  'lg' = '950px',
  'xl' = '1200px',
  'xxl' = '1440px',
}

export const DEFAULT_OFFSET = 200;
