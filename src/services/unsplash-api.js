import axios from "axios";

const API_KEY = "AKj9PP8AEiEUHW5CpNhu-vUq7sAsf9DMxzyB0dhta_s";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 3,
  lang: "en",
};

export const fetchImages = async (query, page, signal) => {
  const res = await axios.get(
    `/search/photos?client_id=${API_KEY}&page=${page}&query=${query}`,
    { signal }
  );
  //console.log("Response", res.data);
  return res.data;
};
