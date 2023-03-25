import React from "react";
import { StatusBar, View } from "react-native";
import FullPostScreen from "./screens/FullPost";
import HomeScreen from "./screens/Home";

export default function App() {
  return (
    <View>
      {/* <HomeScreen /> */}
      <FullPostScreen />
      <StatusBar theme="auto" />
    </View>
  );
}
