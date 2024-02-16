const response = require("./response.json");

const nameAndYearList = response.map((item, index) => ({
  name: item.name,
  year: item.vehicle.year,
}));
console.log("List of objects with only name and year properties:");
console.log(nameAndYearList);

const filteredList = response.filter((item) => item.vehicle.year > 2020);
console.log("\nObjects with year higher than 2020:");
console.log(filteredList);