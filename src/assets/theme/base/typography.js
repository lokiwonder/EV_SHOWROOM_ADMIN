import colors from "assets/theme/base/colors";

import pxToRem from "assets/theme/functions/pxToRem";

const { dark } = colors;

const baseProperties = {
  fontFamily: '"Hyundai Sans Head Regular"',
  fontWeightLighter: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(10.4),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeMD: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
  fontSize2XL: pxToRem(24),
  fontSize3XL: pxToRem(30),
};

const baseHeadingProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightBold,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily,
  color: dark.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2,
};

const typography = {
  fontFamily: baseProperties.fontFamily,
  fontWeightLighter: baseProperties.fontWeightLighter,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontFamily: '"Hyundai Sans Head Medium"',
    fontWeight: 500,
    fontSize: pxToRem(100),
    lineHeight: "123.6px",
    ...baseHeadingProperties,
  },

  h2: {
    fontFamily: '"Hyundai Sans Head Medium"',
    fontWeight: 500,
    fontSize: pxToRem(60),
    lineHeight: "74.16px",
    ...baseHeadingProperties,
  },

  h3: {
    fontFamily: '"Hyundai Sans Head Medium"',
    fontWeight: 500,
    fontSize: pxToRem(45),
    lineHeight: "55.62px",
    ...baseHeadingProperties,
  },

  h4: {
    fontFamily: '"Hyundai Sans Head Medium"',
    fontWeight: 500,
    fontSize: pxToRem(35),
    lineHeight: "43.26px",
    ...baseHeadingProperties,
  },

  h5: {
    fontFamily: '"Hyundai Sans Head Medium"',
    fontWeight: 500,
    fontSize: pxToRem(30),
    lineHeight: "37.08px",
    ...baseHeadingProperties,
  },

  h6: {
    fontFamily: '"Hyundai Sans Head Medium"',
    fontWeight: 500,
    fontSize: pxToRem(20),
    lineHeight: "24.72px",
    ...baseHeadingProperties,
  },

  b1: {
    fontFamily: '"Hyundai Sans Head Regular"',
    fontWeight: 400,
    fontSize: pxToRem(40),
    lineHeight: "49.44px",
  },

  b2: {
    fontFamily: '"Hyundai Sans Head Regular"',
    fontWeight: 400,
    fontSize: pxToRem(30),
    lineHeight: "37.08px",
  },

  b3: {
    fontFamily: '"Hyundai Sans Head Regular"',
    fontWeight: 400,
    fontSize: pxToRem(24),
    lineHeight: "29.66px",
  },

  b4: {
    fontFamily: '"Hyundai Sans Head Regular"',
    fontWeight: 400,
    fontSize: pxToRem(12),
    lineHeight: "14.83px",
  },

  b5: {
    fontFamily: '"Hyundai Sans Head Regular"',
    fontWeight: 400,
    fontSize: pxToRem(10),
    lineHeight: "12.36px",
  },

  b6: {
    fontFamily: '"Hyundai Sans Head Regular"',
    fontWeight: 400,
    fontSize: pxToRem(20),
    lineHeight: "24.72px",
  },

  b7: {
    fontFamily: '"Hyundai Sans Head Regular"',
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: "17.3px",
  },

  button: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.5,
    textTransform: "uppercase",
  },

  caption: {
    fontFamily: baseProperties.fontFamily,
    fontSize: baseProperties.fontSizeXS,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.25,
  },

  overline: {
    fontFamily: baseProperties.fontFamily,
  },

  d1: {
    fontSize: pxToRem(80),
    ...baseDisplayProperties,
  },

  d2: {
    fontSize: pxToRem(72),
    ...baseDisplayProperties,
  },

  d3: {
    fontSize: pxToRem(64),
    ...baseDisplayProperties,
  },

  d4: {
    fontSize: pxToRem(56),
    ...baseDisplayProperties,
  },

  d5: {
    fontSize: pxToRem(48),
    ...baseDisplayProperties,
  },

  d6: {
    fontSize: pxToRem(40),
    ...baseDisplayProperties,
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    "2xl": baseProperties.fontSize2XL,
    "3xl": baseProperties.fontSize3XL,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;
