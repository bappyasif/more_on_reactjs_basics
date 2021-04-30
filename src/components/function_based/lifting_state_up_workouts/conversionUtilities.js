export function toCelsius(farenheit) {
  return ((farenheit - 32) * 5) / 9;
}

export function toFarenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function tryConvertion(temperature, convert) {
  let input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  let output = convert(input);
  let rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
