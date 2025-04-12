export const FONT_FAMILY = {
    SF_PRO: 'SF Pro Display',
    UNBOUNDED: 'Unbounded',
} as const;

export const FONT_WEIGHT = {
    THIN: 100,
    EXTRALIGHT: 200,
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
    EXTRABOLD: 800,
    BLACK: 900,
} as const;

export type FontFamily = (typeof FONT_FAMILY)[keyof typeof FONT_FAMILY];
export type FontWeight = (typeof FONT_WEIGHT)[keyof typeof FONT_WEIGHT];
