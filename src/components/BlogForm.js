import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogForm = ({ initialValues, onSubmit, btnTitle }) => {

  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.heading}>Add Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title={btnTitle} onPress={()=>{onSubmit(title,content)}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    fontSize: 18,
    padding: 5,
    margin: 5,
  },
});

BlogForm.defaultProps = {
    initialValues:{
        title: '',
        content: ''
    }
}

export default BlogForm;
