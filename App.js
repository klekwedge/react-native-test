import axios from "axios";
import React from "react";
import { StatusBar, Alert, View, FlatList } from "react-native";
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
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Post
            title={item.title}
            createdAt={item.createdAt}
            imageUrl={item.imageUrl}
          />
        )}
      />
      <StatusBar theme="auto" />
    </View>
  );
}
