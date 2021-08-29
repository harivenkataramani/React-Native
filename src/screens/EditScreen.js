import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogForm from "../components/BlogForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((post) => post.id === navigation.getParam("id"));

  return (
    <BlogForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title,content) => {
        editBlogPost(title, content, navigation.getParam("id"));
        navigation.navigate("Index");
      }}
      btnTitle = {"Edit Post"}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
