import React, { useState, useEffect } from "react";
import { Image, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getResult(id);
  },[]);

  if (!result) {
      return null
  }

  return (
    <>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
            return <Image style={styles.image} source={{uri:item}} />
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
    image:{
        height: 200, 
        width:300,
        marginHorizontal: 60,
        marginVertical: 10
    }
});

export default ResultsScreen;
