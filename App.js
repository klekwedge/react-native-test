import axios from "axios";
import React from "react";
import { StatusBar, Alert, View } from "react-native";
import Post from "./components/Post";

export default function App() {
  const [items, setItems] = React.useState();

  React.useEffect(() => {
    axios
      .get("https://637283b2025414c63711bbb5.mockapi.io/articles")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статьи");
      });
  }, []);

  return (
    <View>
      <Post
        title="TEST"
        createdAt="25.03.23"
        imageUrl="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
      />
      <StatusBar theme="auto" />
    </View>
  );
}
