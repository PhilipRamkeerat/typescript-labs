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
export const colorCode = (color: Color): number => colorMap[color];

// Helper function to validate the input colors
function validateColors(colors: Array<Color>): void {
  colors.forEach((color) => {
    if (!COLORS.includes(color)) {
      throw new Error(`Invalid color value: ${color}`);
    }
  });
}

// Helper function to calculate the base value from the first two colors
function calculateBaseValue(first: Color, second: Color): number {
  return colorCode(first) * 10 + colorCode(second);
}

// Helper function to apply the multiplier and calculate the final value
function applyMultiplier(baseValue: number, multiplierColor: Color): number {
  return baseValue * Math.pow(10, colorCode(multiplierColor));
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

// Function to decode the resistor value from an array of colors
export function decodedResistorValue(colorsArray: Array<Color>): string {
  // Destructure the array to get the first, second, and third colors
  const [first, second, third] = colorsArray;

  // Validate the colors
  validateColors([first, second, third]);

  // Calculate the base value
  const baseValue = calculateBaseValue(first, second);

  // Calculate the final resistor value by applying the multiplier
  const finalValue = applyMultiplier(baseValue, third);

  // Format and return the resistor value with appropriate units
  return formatResistorValue(finalValue);
}
