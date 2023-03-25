import { StatusBar, View } from "react-native";
import Post from "./components/Post";

export default function App() {
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
