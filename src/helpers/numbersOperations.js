export function roundToTreeNumbers(value) {
  const numberToString = String(value);
  const array = numberToString.split("");

  if (array.includes("-") || array.includes("+")) {
    if (array[5] > 5) array[4]++;
    const spliced = array.splice(0, 5);
    return spliced.join("");
  } else {
    if (array[4] > 5) array[3]++;
    const spliced = array.splice(0, 4);
    return spliced.join("");
  }
}

export function roundAndAddComma(value) {
  const numberToString = String(value);
  const array = numberToString.split("");
  const index = numberToString.indexOf(".");

  if (array[index + 3] > 5) array[index + 2]++;

  array.splice(index + 3, array.length - 1);

  const addedCommaArray = array
    .splice(0, index)
    .join("")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .split("");

  const result = addedCommaArray.concat(array);
  return result.join("");
}

export function addCommasToNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function isPositive(number) {
  const value = String(number);
  if (value.includes("-")) {
    return false;
  } else {
    return true;
  }
}

export function normalizePerForShortInfo(number) {
  let value = String(number).split("");

  if (value.length === 1) {
    const end = [".", "0", "0"];
    value = value.concat(end);
  }
  
  return value.join("");
}
