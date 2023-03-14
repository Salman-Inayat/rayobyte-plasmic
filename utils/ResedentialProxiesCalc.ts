const calculateResedentialProxy = (input: number) => {
  if (input >= 1 && input <= 15) {
    return input * 15;
  } else if (input >= 16 && input <= 49) {
    return (input * 12.5).toFixed(2);
  } else if (input >= 50 && input <= 99) {
    return input * 7;
  } else if (input >= 100 && input <= 249) {
    return input * 6;
  } else if (input >= 250 && input <= 499) {
    return input * 5;
  } else if (input >= 500 && input <= 999) {
    return input * 4;
  } else if (input >= 1000 && input <= 4999) {
    return input * 3;
  } else if (input >= 5000) {
    return input;
  } else {
    return 0;
  }
};

export { calculateResedentialProxy };
