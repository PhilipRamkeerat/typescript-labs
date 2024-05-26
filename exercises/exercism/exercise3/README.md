# Resistor Color Code Decoder

## Overview

This project involves creating a program to decode the resistance value of resistors based on their color bands. Resistors are small electronic components that have color-coded bands to denote their resistance values, as printing the values directly on them would be difficult to read.

## Color Codes

Each resistor has colored bands that represent digits of a number. The colors and their corresponding values are as follows:

- Black: 0
- Brown: 1
- Red: 2
- Orange: 3
- Yellow: 4
- Green: 5
- Blue: 6
- Violet: 7
- Grey: 8
- White: 9

## How it Works

1. **First Two Colors**: The first two color bands represent the main value of the resistor.
2. **Third Color**: The third color band represents the number of zeros to add to the main value.

For example:

- "orange", "orange", "black" translates to 33 ohms (33 followed by 0 zeros).
- "orange", "orange", "red" translates to 3300 ohms (33 followed by 2 zeros).
- "orange", "orange", "orange" translates to 33000 ohms (33 followed by 3 zeros).

When the value becomes large, a metric prefix is used:

- 1000 ohms is represented as 1 kiloohm.
- 1000000 ohms is represented as 1 megaohm.
- 1000000000 ohms is represented as 1 gigaohm.

## Example Usage

- An input of ["orange", "orange", "black"] returns "33 ohms".
- An input of ["orange", "orange", "orange"] returns "33 kiloohms".

## Implementation

The program should take an array of three colors as input and output the correct resistance value with the appropriate unit (ohms, kiloohms, megaohms, gigaohms).

## Getting Started

1. Clone the repository.
2. Install dependencies if any.
3. Run the program with different color inputs to get the resistance value.

```typescript
// Example usage:
console.log(decodedResistorValue(["orange", "orange", "black"])); // Outputs: "33 ohms"
console.log(decodedResistorValue(["orange", "orange", "orange"])); // Outputs: "33 kiloohms"
```
