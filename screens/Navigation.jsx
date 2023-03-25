import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FullPostScreen from "./FullPost";
import HomeScreen from "./Home";

const Stack = createNativeStackNavigator();

export default Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Новости" }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPostScreen}
          options={{ title: "Статья" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
