import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ results }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: results.image_url }} />
      <Text style={styles.name}>{results.name}</Text>
      <Text>
        {results.rating} stars, {results.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginLeft: 20
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
