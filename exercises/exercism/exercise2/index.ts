export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

type Color = (typeof COLORS)[number];

const colorMap: Record<Color, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export const colorCode = (color: Color): number => {
  return colorMap[color];
};

export function decodedValue(colorsArray: string[]): number {
  const [firstColor, secondColor] = colorsArray;

  if (
    !COLORS.includes(firstColor as Color) ||
    !COLORS.includes(secondColor as Color)
  ) {
    throw new Error(`Invalid color value(s): ${colorsArray}`);
  }

  const firstDigit = colorCode(firstColor as Color);
  const secondDigit = colorCode(secondColor as Color);

  return firstDigit * 10 + secondDigit;
}
