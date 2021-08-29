import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApiCall = async (searchTerm) => {
    try {
      const respData = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResult(respData.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something Went Wrong");
    }
  };

  useEffect(() => {
    searchApiCall("pasta");
  }, []);

  return [searchApiCall, errorMessage, result];
};
