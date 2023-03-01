import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            component={CategoriesScreen}
            name="CategoriesScreen"
            options={{ title: "All Categories" }}
          />
          <Stack.Screen
            component={MealsOverviewScreen}
            name="MealsOverviewScreen"
        //     options={({route, navigation}) => {
        //       const catId = route.params.categoryId;
        //        return { title: catId };
        //  }}
          />
          <Stack.Screen 
          component={MealDetailScreen}
          name="MealDetailScreen"
          />
              <Stack.Screen 
          component={MealDetailScreen}
          name="MealDetail"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
