import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApiCall = async () => {
    try {
      const respData = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResult(respData.data.businesses);
      setErrorMessage('')
    } catch (err) {
      setErrorMessage("Something Went Wrong");
    }
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <SearchBar
        searchTerm={searchTerm}
        updateSearchTerm={(newValue) => {
          setSearchTerm(newValue);
        }}
        onTermSubmit={searchApiCall}
      />
      {errorMessage ? <Text>{errorMessage}</Text>:null}
      <Text>We have found {result.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
