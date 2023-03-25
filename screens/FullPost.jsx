import React from "react";
import axios from "axios";
import styled from "styled-components/native";
import { Text, Image, View } from "react-native";
import Loading from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

const FullPostScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState();

  const fetchPost = () => {
    setIsLoading(true);
    axios
      .get("https://637283b2025414c63711bbb5.mockapi.io/articles/1")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статью");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchPost, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: data?.imageUrl,
        }}
      />
      <PostText>
       {data?.text}
      </PostText>
    </View>
  );
};

export default FullPostScreen;
