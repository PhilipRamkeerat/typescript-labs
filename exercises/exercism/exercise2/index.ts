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

export const colors = (): readonly Color[] => {
  return COLORS;
};

export const addDigitToNumber = (
  currentNumber: number,
  digit: number
): number => {
  const result = `${currentNumber}${digit}`;
  return Number(result);
};

export function decodedValue(colorsArray: string[]): number {
  if (colorsArray.length > 2) {
    colorsArray = colorsArray.slice(0, 2);
  }

  let result = 0;

  colorsArray.forEach((word) => {
    if (COLORS.includes(word as Color)) {
      const color = word as Color;
      result = addDigitToNumber(result, colorCode(color));
    } else {
      throw new Error(`Invalid color value: ${word}`);
    }
  });

  return result;
}
