import { css } from '@emotion/react';

import { Breakpoints } from './shared/breakpoints';

import { colors, SPACING, TYPOGRAPHY } from './shared/variables';

export const getGlobalStyles = () => css`
  :root {
    --font-family: 'Monstserrat', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
      'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --max-width: ${Breakpoints.xxl};
    --font-color-base: ${colors.fontBase};
    --font-color-hover: ${colors.fontHover};
    --font-color-disabled: ${colors.fontDisabled};
    --font-color-invert: ${colors.fontInvert};
    --font-color-second: ${colors.fontSecond};
    --font-color-error: ${colors.fontError};
    --font-color-warning: ${colors.fontWarning};
    --font-color-second-accent: ${colors.fontThird};
    --background-color: ${colors.background};
    --background-color-invert: ${colors.backgroundInvert};
    --background-color-inactive: ${colors.backgroundInactive};
    --background-color-bright: ${colors.backgroundBright};
    --background-color-fields: ${colors.backgroundFields};
    --background-color-footer: ${colors.backgroundFooter};
    --background-color-reset: ${colors.backgroundReset};
    --background-color-warning: ${colors.backgroundWarning};
    --background-color-button: ${colors.backgroundButton};
    --background-color-button-secondary: ${colors.backgroundButtonSecondary};
    --background-color-button-invert: ${colors.backgroundButtonInvert};
    --background-color-button-hover: ${colors.backgroundButtonHover};
    --background-color-button-hover-secondary: ${colors.backgroundButtonHoverSecondary};
    --background-color-button-disabled: ${colors.backgroundButtonDisabled};
    --background-color-slider-arrow: ${colors.backgroundCards};
    --background-color-slider-arrow-hover: ${colors.backgroundFooter};
    --background-color-review-card: ${colors.backgroundFooter};
    --background-color-cards: ${colors.backgroundCards};
    --border-color: ${colors.borderBase};
    --border-color-invert: ${colors.borderInvert};
    --border-color-hover: ${colors.borderHover};
    --background-color-secondary: ${colors.backgroundSecondary};
    --border-color-hover-input: ${colors.borderHoverInput};
    --border-color-focused-input: ${colors.borderFocusedInput};
    --border-color-focused: ${colors.borderFocused};
    --border-color-disabled: ${colors.borderDisabled};
    --border-color-warning: ${colors.borderWarning};
    --border-color-grid: ${colors.borderGrid};
    --additional-color: ${colors.additional};
    --body-font-family: var(--font-family);

    --H1-font-size: ${TYPOGRAPHY.desktop.heading1.fontSize};
    --H1-line-height: ${TYPOGRAPHY.desktop.heading1.lineHeight};
    --H1-font-weight: ${TYPOGRAPHY.desktop.heading1.fontWeight};
    --H2-font-size: ${TYPOGRAPHY.desktop.heading2.fontSize};
    --H2-line-height: ${TYPOGRAPHY.desktop.heading2.lineHeight};
    --H2-font-weight: ${TYPOGRAPHY.desktop.heading2.fontWeight};
    --H3-font-size: ${TYPOGRAPHY.desktop.heading3.fontSize};
    --H3-line-height: ${TYPOGRAPHY.desktop.heading3.lineHeight};
    --H3-font-weight: ${TYPOGRAPHY.desktop.heading3.fontWeight};
    --H4-font-size: ${TYPOGRAPHY.desktop.heading4.fontSize};
    --H4-line-height: ${TYPOGRAPHY.desktop.heading4.lineHeight};
    --H4-font-weight: ${TYPOGRAPHY.desktop.heading4.fontWeight};
    --H5-font-size: ${TYPOGRAPHY.desktop.heading5.fontSize};
    --H5-line-height: ${TYPOGRAPHY.desktop.heading5.lineHeight};
    --H5-font-weight: ${TYPOGRAPHY.desktop.heading5.fontWeight};
    --H6-font-size: ${TYPOGRAPHY.desktop.heading6.fontSize};
    --H6-line-height: ${TYPOGRAPHY.desktop.heading6.lineHeight};
    --H6-font-weight: ${TYPOGRAPHY.desktop.heading6.fontWeight};
    --extraLargeBold-font-size: ${TYPOGRAPHY.desktop.extraLargeBold.fontSize};
    --extraLargeBold-line-height: ${TYPOGRAPHY.desktop.extraLargeBold.lineHeight};
    --extraLargeBold-font-weight: ${TYPOGRAPHY.desktop.extraLargeBold.fontWeight};
    --extraLargeRegular-font-size: ${TYPOGRAPHY.desktop.extraLargeRegular.fontSize};
    --extraLargeRegular-line-height: ${TYPOGRAPHY.desktop.extraLargeRegular.lineHeight};
    --extraLargeRegular-font-weight: ${TYPOGRAPHY.desktop.extraLargeRegular.fontWeight};
    --largeBold-font-size: ${TYPOGRAPHY.desktop.largeBold.fontSize};
    --largeBold-line-height: ${TYPOGRAPHY.desktop.largeBold.lineHeight};
    --largeBold-font-weight: ${TYPOGRAPHY.desktop.largeBold.fontWeight};
    --largeRegular-font-size: ${TYPOGRAPHY.desktop.largeRegular.fontSize};
    --largeRegular-line-height: ${TYPOGRAPHY.desktop.largeRegular.lineHeight};
    --largeRegular-font-weight: ${TYPOGRAPHY.desktop.largeRegular.fontWeight};
    --normalBold-font-size: ${TYPOGRAPHY.desktop.normalBold.fontSize};
    --normalBold-line-height: ${TYPOGRAPHY.desktop.normalBold.lineHeight};
    --normalBold-font-weight: ${TYPOGRAPHY.desktop.normalBold.fontWeight};
    --normalRegular-font-size: ${TYPOGRAPHY.desktop.normalRegular.fontSize};
    --normalRegular-line-height: ${TYPOGRAPHY.desktop.normalRegular.lineHeight};
    --normalRegular-font-weight: ${TYPOGRAPHY.desktop.normalRegular.fontWeight};
    --smallBold-font-size: ${TYPOGRAPHY.desktop.smallBold.fontSize};
    --smallBold-line-height: ${TYPOGRAPHY.desktop.smallBold.lineHeight};
    --smallBold-font-weight: ${TYPOGRAPHY.desktop.smallBold.fontWeight};
    --smallRegular-font-size: ${TYPOGRAPHY.desktop.smallRegular.fontSize};
    --smallRegular-line-height: ${TYPOGRAPHY.desktop.smallRegular.lineHeight};
    --smallRegular-font-weight: ${TYPOGRAPHY.desktop.smallRegular.fontWeight};

    --spacing-1: ${SPACING.desktop.L1};
    --spacing-2: ${SPACING.desktop.L2};
    --spacing-3: ${SPACING.desktop.L3};
    --spacing-4: ${SPACING.desktop.L4};
    --spacing-5: ${SPACING.desktop.L5};
    --spacing-6: ${SPACING.desktop.L6};
    --spacing-7: ${SPACING.desktop.L7};
    --spacing-8: ${SPACING.desktop.L8};
    --spacing-9: ${SPACING.desktop.L9};
    --spacing-10: ${SPACING.desktop.L10};

    @media (max-width: ${Breakpoints.xl}) {
      --H1-font-size: ${TYPOGRAPHY.tablet.heading1.fontSize};
      --H1-line-height: ${TYPOGRAPHY.tablet.heading1.lineHeight};
      --H1-font-weight: ${TYPOGRAPHY.tablet.heading1.fontWeight};
      --H2-font-size: ${TYPOGRAPHY.tablet.heading2.fontSize};
      --H2-line-height: ${TYPOGRAPHY.tablet.heading2.lineHeight};
      --H2-font-weight: ${TYPOGRAPHY.tablet.heading2.fontWeight};
      --H3-font-size: ${TYPOGRAPHY.tablet.heading3.fontSize};
      --H3-line-height: ${TYPOGRAPHY.tablet.heading3.lineHeight};
      --H3-font-weight: ${TYPOGRAPHY.tablet.heading3.fontWeight};
      --H4-font-size: ${TYPOGRAPHY.tablet.heading4.fontSize};
      --H4-line-height: ${TYPOGRAPHY.tablet.heading4.lineHeight};
      --H4-font-weight: ${TYPOGRAPHY.tablet.heading4.fontWeight};
      --H5-font-size: ${TYPOGRAPHY.tablet.heading5.fontSize};
      --H5-line-height: ${TYPOGRAPHY.tablet.heading5.lineHeight};
      --H5-font-weight: ${TYPOGRAPHY.tablet.heading5.fontWeight};
      --H6-font-size: ${TYPOGRAPHY.tablet.heading6.fontSize};
      --H6-line-height: ${TYPOGRAPHY.tablet.heading6.lineHeight};
      --H6-font-weight: ${TYPOGRAPHY.tablet.heading6.fontWeight};
      --extraLargeBold-font-size: ${TYPOGRAPHY.tablet.extraLargeBold.fontSize};
      --extraLargeBold-line-height: ${TYPOGRAPHY.tablet.extraLargeBold.lineHeight};
      --extraLargeBold-font-weight: ${TYPOGRAPHY.tablet.extraLargeBold.fontWeight};
      --extraLargeRegular-font-size: ${TYPOGRAPHY.tablet.extraLargeRegular.fontSize};
      --extraLargeRegular-line-height: ${TYPOGRAPHY.tablet.extraLargeRegular.lineHeight};
      --extraLargeRegular-font-weight: ${TYPOGRAPHY.tablet.extraLargeRegular.fontWeight};
      --largeBold-font-size: ${TYPOGRAPHY.tablet.largeBold.fontSize};
      --largeBold-line-height: ${TYPOGRAPHY.tablet.largeBold.lineHeight};
      --largeBold-font-weight: ${TYPOGRAPHY.tablet.largeBold.fontWeight};
      --largeRegular-font-size: ${TYPOGRAPHY.tablet.largeRegular.fontSize};
      --largeRegular-line-height: ${TYPOGRAPHY.tablet.largeRegular.lineHeight};
      --largeRegular-font-weight: ${TYPOGRAPHY.tablet.largeRegular.fontWeight};
      --normalBold-font-size: ${TYPOGRAPHY.tablet.normalBold.fontSize};
      --normalBold-line-height: ${TYPOGRAPHY.tablet.normalBold.lineHeight};
      --normalBold-font-weight: ${TYPOGRAPHY.tablet.normalBold.fontWeight};
      --normalRegular-font-size: ${TYPOGRAPHY.tablet.normalRegular.fontSize};
      --normalRegular-line-height: ${TYPOGRAPHY.tablet.normalRegular.lineHeight};
      --normalRegular-font-weight: ${TYPOGRAPHY.tablet.normalRegular.fontWeight};
      --smallBold-font-size: ${TYPOGRAPHY.tablet.smallBold.fontSize};
      --smallBold-line-height: ${TYPOGRAPHY.tablet.smallBold.lineHeight};
      --smallBold-font-weight: ${TYPOGRAPHY.tablet.smallBold.fontWeight};
      --smallRegular-font-size: ${TYPOGRAPHY.tablet.smallRegular.fontSize};
      --smallRegular-line-height: ${TYPOGRAPHY.tablet.smallRegular.lineHeight};
      --smallRegular-font-weight: ${TYPOGRAPHY.tablet.smallRegular.fontWeight};

      --spacing-1: ${SPACING.tablet.L1};
      --spacing-2: ${SPACING.tablet.L2};
      --spacing-3: ${SPACING.tablet.L3};
      --spacing-4: ${SPACING.tablet.L4};
      --spacing-5: ${SPACING.tablet.L5};
      --spacing-6: ${SPACING.tablet.L6};
      --spacing-7: ${SPACING.tablet.L7};
      --spacing-8: ${SPACING.tablet.L8};
      --spacing-9: ${SPACING.tablet.L9};
      --spacing-10: ${SPACING.tablet.L10};
    }
    @media (max-width: ${Breakpoints.md}) {
    }
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }
  html {
    min-height: 100vh;
    scroll-behavior: smooth;
  }
  body {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
    font-family: var(--body-font-family);
    font-size: var(--normalRegular-font-size);
    font-weight: var(--normalRegular-font-weight);
    min-height: 100vh;
    margin: 0;
  }

  #root {
    min-height: 100vh;
  }

  main {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  hr {
    margin: 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
  }
  hr:not([size]) {
    height: 1px;
  }
  h6,
  h5,
  h4,
  h3,
  h2,
  h1 {
    margin: 0;
    padding: 0;
    color: var(--font-color-base);
  }
  h1 {
    font-size: var(--H1-font-size);
    font-weight: var(--H1-font-weight);
    line-height: var(--H1-line-height);
  }
  h2 {
    font-size: var(--H2-font-size);
    font-weight: var(--H2-font-weight);
    line-height: var(--H2-line-height);
  }
  h3 {
    font-size: var(--H3-font-size);
    font-weight: var(--H3-font-weight);
    line-height: var(--H3-line-height);
  }
  h4 {
    font-size: var(--H4-font-size);
    font-weight: var(--H4-font-weight);
    line-height: var(--H4-line-height);
  }
  h5 {
    font-size: var(--H5-font-size);
    font-weight: var(--H5-font-weight);
    line-height: var(--H5-line-height);
  }
  h6 {
    font-size: var(--H6-font-size);
    font-weight: var(--H6-font-weight);
    line-height: var(--H6-line-height);
  }
  p,
  a,
  span {
    margin: 0;
    font-size: var(--normalRegular-font-size);
    font-weight: var(--normalRegular-font-weight);
  }
  div,
  label,
  input,
  select,
  option,
  button {
    color: var(--font-color-base);
  }
  input {
    border: 0;
    padding: 0;
    margin: 0;
    outline: none;
    font-size: var(--normalRegular-font-size);
    font-weight: var(--normalRegular-font-weight);
    line-height: var(--normalRegular-line-height);
  }

  input:-internal-autofill-selected {
    appearance: menulist-button;
    background-image: none !important;
    color: #ffffff !important;
  }

  /* кастомизация слайдера */

  .slick-slider {
    margin-bottom: var(--spacing-1);
  }

  .slick-list {
    padding: 10px;
  }
  .slick-track {
    display: flex;
  }

  .slick-dots {
    bottom: calc(-1 * var(--spacing-2));
  }

  .slick-slide {
    height: auto;
    flex: 0 0 auto;
  }
  .slick-initialized .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-slide > div {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .slick-dots li {
    width: var(--spacing-6);
  }

  .slick-dots li button::before {
    font-size: 8px;
  }

  input::placeholder {
    font-size: var(--normalRegular-font-size);
    font-weight: var(--normalRegular-font-weight);
    line-height: var(--normalRegular-line-height);
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover {
    box-shadow: inset 0 0 0 50px var(--background-color); /* Цвет фона */
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* удаление иконки очистки поля в IE */
  input[type='text']::-ms-clear {
    display: none;
  }

  /* удаление иконки отображения пароля в IE */
  input[type='password']::-ms-reveal {
    display: none;
  }

  /* удаление иконки генерации пароля в safari*/
  input:focus::-webkit-textfield-decoration-container {
    visibility: hidden;
    pointer-events: none;
  }

  /* удаление иконки пользователя в safari*/
  input::-webkit-contacts-auto-fill-button {
    visibility: hidden;
    position: absolute;
    right: 0;
  }

  abbr[title],
  abbr[data-bs-original-title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }
  address {
    font-style: normal;
    line-height: inherit;
  }
  ol,
  ul {
    padding: 0;
    list-style: none;
  }

  ol,
  ul,
  dl {
    margin: 0;
  }

  li {
    list-style-type: none;
  }
  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  blockquote {
    margin: 0 0 1rem;
  }
  b,
  strong {
    font-weight: bolder;
  }
  a {
    text-decoration: none;
  }
  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }
  pre,
  code,
  kbd,
  samp {
    direction: ltr;
    unicode-bidi: bidi-override;
  }
  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em;
  }
  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }
  code {
    font-size: 0.875em;
    word-wrap: break-word;
  }
  a > code {
    color: inherit;
  }
  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em;
    border-radius: 0.2rem;
  }
  kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700;
  }
  figure {
    margin: 0 0 1rem;
  }
  img,
  svg {
    vertical-align: middle;
  }
  table {
    caption-side: bottom;
    border-collapse: collapse;
  }
  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
  }
  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }
  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }
  label {
    display: inline-block;
  }
  button:focus:not(:focus-visible) {
    outline: 0;
  }
  button {
    background: none;
    border: none;
  }
  button,
  select {
    text-transform: none;
  }
  [role='button'] {
    cursor: pointer;
  }
  select {
    word-wrap: normal;
  }
  select:disabled {
    opacity: 1;
  }
  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type='button']:not(:disabled),
  [type='reset']:not(:disabled),
  [type='submit']:not(:disabled) {
    cursor: pointer;
  }
  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  textarea {
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    padding: 0;
  }
  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
  }
  legend + * {
    clear: left;
  }
  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }
  ::-webkit-inner-spin-button {
    height: auto;
  }
  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  ::-webkit-file-upload-button {
    font: inherit;
  }
  ::file-selector-button {
    font: inherit;
  }
  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }
  output {
    display: inline-block;
  }
  iframe {
    border: 0;
  }
  summary {
    display: list-item;
    cursor: pointer;
  }
  progress {
    vertical-align: baseline;
  }
  [hidden] {
    display: none !important;
  }

  .button {
    padding: var(--spacing-8) var(--spacing-6);
    border-radius: var(--spacing-10);
    font-size: var(--normalRegular-font-size);
    font-weight: var(--normalRegular-font-weight);
    color: var(--font-color-base);
    background-color: var(--background-color-base);
    border: 1px solid var(--border-color);
    min-width: 7rem;

    &:hover {
      color: var(--font-color-hover);
      border-color: var(--border-color-hover);
    }

    &:active {
      border-color: var(--border-color);
    }

    &:disabled {
      background-color: var(--background-color-button-disabled);
      border-color: var(--border-color-disabled);
    }
  }

  .buttonDark {
    color: var(--font-color-invert);
    background-color: var(--background-color-button-invert);

    &:hover {
      color: var(--font-color-invert);
      background-color: var(--background-color-button-hover);
    }

    &:focus {
      color: var(--font-color-invert);
    }

    &:disabled {
      color: var(--font-color-invert);
      background-color: var(--background-color-button-disabled);
    }
  }

  .buttonBright {
    color: var(--font-color-invert);
    background-color: var(--background-color-bright);
    border: 1px solid var(--background-color-bright);

    &:hover {
      color: var(--font-color-invert);
      background-color: var(--background-color-button-hover);
    }

    &:focus {
      color: var(--font-color-invert);
    }

    &:disabled {
      color: var(--font-color);
      background-color: var(--background-color-button-disabled);
    }
  }

  .buttonSecondary {
    color: var(--font-color-invert);
    background-color: var(--background-color-button-secondary);
    border: 1px solid var(--background-color-button-secondary);
    min-width: 8rem;

    &:hover,
    &:active {
      color: var(--font-color-invert);
      border-color: var(--background-color-button-hover-secondary);
      background-color: var(--background-color-button-hover-secondary);
    }

    &:disabled {
      background-color: var(--background-color-button-disabled);
      border-color: var(--border-color-disabled);
    }
  }

  .buttonWithoutBorder {
    padding: var(--spacing-8) var(--spacing-6);
    border-radius: var(--spacing-10);
    font-size: var(--normalRegular-font-size);
    font-weight: var(--normalRegular-font-weight);
    color: var(--font-color-disabled);
    background-color: var(--background-color-base);
    border: 1px solid transparent;
    min-width: 9rem;

    &:hover,
    &:active {
      color: var(--font-color-base);
    }

    &:disabled {
      background-color: var(--background-color-button-disabled);
      border-color: var(--border-color-disabled);
    }
  }

  .buttonRemove {
    color: var(--font-color-error);
    border: none;

    &:disabled {
      color: var(--font-color-disabled);
      background: none;
      border: none;
    }
  }

  .input {
    border: 1px solid #dedede;
    border-radius: 4px;
    width: calc((100% - var(--spacing-7)) / 2);
    flex: 1;
    padding: var(--spacing-9) var(--spacing-7);

    &:active,
    &:focus {
      border: 1px solid #326789;
    }
  }

  a {
    color: #121211;
  }

  .containerWrapper {
    max-width: var(--max-width);
    width: 100%;
    padding: 0 var(--spacing-7);
  }

  .error {
    color: var(--font-color-error);
  }
`;
