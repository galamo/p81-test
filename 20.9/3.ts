enum Color {
    Red = 1,
    Blue = 2,
    Green = 3,
    Yellow = 4,
  }
  type Colors = Color;
  type Colors2 = Color.Red | Color.Blue | Color.Green | Color.Yellow;
  
  enum Colors4 {
    Red,
    Green,
    Yellow = "yellow",
    Orange = getColor(), // computed values must be a 'number' datatype
  }
  function getColor() {
    const computedEnum = 5;
    return computedEnum;
  }
  

  
  