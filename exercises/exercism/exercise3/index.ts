// Define the possible colors as a constant array
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

// Type definition for Color based on the COLORS array
type Color = (typeof COLORS)[number];

// Mapping of colors to their corresponding numeric values
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

// Enums for resistor value thresholds
enum ResistorThresholds {
  Kiloohms = 1000,
  Megaohms = 1000000,
  Gigaohms = 1000000000,
}

// Function to get the numeric value of a color
export const colorCode = (color: Color): number => {
  return colorMap[color];
};

// Function to decode the resistor value from an array of colors
export function decodedResistorValue(colorsArray: Array<Color>): string {
  // Destructure the array to get the first, second, and third colors
  const [first, second, third] = colorsArray;

  // Validate the colors
  validateColors(first, second, third);

  // Get the numeric values of the colors
  const firstDigit = colorCode(first);
  const secondDigit = colorCode(second);
  const multiplier = colorCode(third);

  // Calculate the initial group value
  const baseValue = firstDigit * 10 + secondDigit;
  const finalValue = addZerosToRight(baseValue, multiplier);

  // Determine the appropriate unit (ohms, kiloohms, megaohms, gigaohms)
  return formatResistorValue(finalValue);
}

// Helper function to validate the input colors
function validateColors(first: Color, second: Color, third: Color): void {
  if (
    !COLORS.includes(first) ||
    !COLORS.includes(second) ||
    !COLORS.includes(third)
  ) {
    throw new Error(`Invalid color value(s): ${[first, second, third]}`);
  }
}

// Helper function to add zeros to the right of a number
function addZerosToRight(number: number, zeros: number): number {
  // Convert the number to a string and pad it with zeros to the right
  const numberStr = number
    .toString()
    .padEnd(number.toString().length + zeros, "0");
  return parseInt(numberStr, 10);
}

// Helper function to format the resistor value with appropriate units
function formatResistorValue(value: number): string {
  if (value >= ResistorThresholds.Gigaohms) {
    return `${value / ResistorThresholds.Gigaohms} gigaohms`;
  } else if (value >= ResistorThresholds.Megaohms) {
    return `${value / ResistorThresholds.Megaohms} megaohms`;
  } else if (value >= ResistorThresholds.Kiloohms) {
    return `${value / ResistorThresholds.Kiloohms} kiloohms`;
  } else {
    return `${value} ohms`;
  }
}
