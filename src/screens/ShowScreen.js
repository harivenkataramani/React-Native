import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({navigation}) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  const blogPost = state.find(blog=>blog.id===navigation.getParam('id'))

  return (
    <View>
        <Text>{blogPost.title}-{blogPost.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
