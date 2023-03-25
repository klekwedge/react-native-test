import { StatusBar, Image, View } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export default function App() {
  return (
    <View>
      <Post>
        <PostImage
          source={{
            uri: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
          }}
        />
        <PostDetails>
          <PostTitle>Nice</PostTitle>
          <PostDate>25/03/2023</PostDate>
        </PostDetails>
      </Post>
      <StatusBar theme="auto" />
    </View>
  );
}
