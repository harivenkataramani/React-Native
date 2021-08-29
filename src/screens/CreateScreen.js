import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.heading}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
      <Button title="Add Post" onPress={()=>{
          addBlogPost(title,content)
          navigation.navigate('Index')
          }}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10
    },
    heading:{
        fontSize: 18,
        marginVertical: 10
    },
    input:{
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 18,
        padding: 5,
        margin: 5
    }
});

export default CreateScreen;
