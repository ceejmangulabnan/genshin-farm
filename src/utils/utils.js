const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date().getDay();

export const filterAvailableToday = (toFilter) => {
  const filtered = toFilter.filter((item) =>
    item.availability.includes(dayNames[today]),
  );
  console.log(filtered);
  return filtered;
};

export const objectToArray = (toConvert) => {
  const newArray = [];
  for (let item of Object.values(toConvert)) {
    newArray.push(item);
  }
  console.log(newArray);
  return newArray;
};

export const capitalizeFirstChar = (str) => {
  // const [strFirstChar, ...rest] = str;
  // return [strFirstChar.toUpperCase(), ...rest].join("");
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatCleanString = (str) => {
  return str.replaceAll("-", " ");
};
