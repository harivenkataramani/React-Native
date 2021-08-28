import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer pD4mBv4tdzr0MIdTJT00W5xhr_hCYFxx5SmNfmE52297rmdRe6f1TO16D3hQXdOOeZCkhEkAKTVXceebDXjnwIeTR2rgG-HgbNmEsbNt5ylnmx6tRyyiW54-PZQqYXYx",
  },
});
