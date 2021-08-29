import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApiCall, errorMessage, result] = useResults();

  const filterResultsByPrice = (price) => {
    //   price = '$' || '$$' || '$$$'
    return result.filter((res) => {
      return res.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        updateSearchTerm={(newValue) => {
          setSearchTerm(newValue);
        }}
        onTermSubmit={() => searchApiCall(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultList
          title="Bit Expensive"
          results={filterResultsByPrice("$$")}
        />
        <ResultList title="Bit Spender" results={filterResultsByPrice("$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen
