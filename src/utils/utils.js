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
  return filtered;
};

export const objectToArray = (toConvert) => {
  const newArray = [];
  for (let item of Object.values(toConvert)) {
    newArray.push(item);
  }
  return newArray;
};

export const capitalizeFirstChar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatCleanString = (str) => {
  return str.replaceAll("-", " ");
};

export const formatDashedString = (str) => {
  return str.toLowerCase().replaceAll(" ", "-");
};
