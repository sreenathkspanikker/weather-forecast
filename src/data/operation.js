import { city } from "./countryList.js";
const getCity = () => {
  const res = city.reduce((acc, curr) => {
    if (!acc[curr.country]) acc[curr.country] = [];
    acc[curr.country].push(curr);
    return acc;
  }, {});
  return res;
};

export default {
  getCity,
};
