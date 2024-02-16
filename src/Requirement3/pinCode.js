import querystring from "querystring";
import fetch from "node-fetch";

const baseUrl =
  "https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6";

let recordList = [];

const createRequestUrl = (offset) => {
  const parameters = {
    "api-key": "579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b",
    format: "json",
    offset,
    limit: 10,
  };
  return baseUrl + "?" + querystring.stringify(parameters);
};

const fetchData = async (requestUrl) => {
  try {
    const response = await fetch(requestUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data!");
    }
    return await response.json();
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

const offsets = [31, 51, 61];

Promise.all(offsets.map((offset) => fetchData(createRequestUrl(offset))))
  .then((dataArray) => {
    recordList = dataArray.reduce((acc, curr) => [...acc, ...curr.records], []);
    console.log(recordList);
  })
  .catch((error) => {
    console.error(error);
  });