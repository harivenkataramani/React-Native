import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({searchTerm,updateSearchTerm,onTermSubmit}) => {
  return (
    <View style={styles.searchBackground}>
      <Feather style={styles.searchIcon} name="search" color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputText}
        placeholder="Search"
        value={searchTerm}
        onChangeText={newValue=>updateSearchTerm(newValue)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBackground: {
    backgroundColor: "#f0eeee",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10,
  },
  inputText: {
    flex: 1,
    fontSize: 20,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
