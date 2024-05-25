export const colorCode = (colorCode: string): number | string => {
  switch (colorCode) {
    case COLORS[0]:
      return 0;
    case COLORS[1]:
      return 1;
    case COLORS[2]:
      return 2;
    case COLORS[3]:
      return 3;
    case COLORS[4]:
      return 4;
    case COLORS[5]:
      return 5;
    case COLORS[6]:
      return 6;
    case COLORS[7]:
      return 7;
    case COLORS[8]:
      return 8;
    case COLORS[9]:
      return 9;
    default:
      throw new Error("Unknow color code");
  }
};

export const COLORS: string[] = [
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
];
