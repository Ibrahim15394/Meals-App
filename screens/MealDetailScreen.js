import { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import FavoritesContext from "../store/context/Favorites-context";

function MealDetailScreen({ route, navigation }) {
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealsId = useSelector((state) => state.favoriteMeals.ids);
 const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsId.includes(mealId);

  function changeFavoriteStatusHandler() {
    // console.log('pressed');
    if (mealIsFavorite) {
      // favoriteMealsId.removeFavorite(mealId);
      dispatch(removeFavorite({ id : mealId}));
    } else {
      // favoriteMealsId.addFavorite(mealId);
      dispatch(addFavorite({ id : mealId}));

    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        textStyle={styles.detailsText}
        duration={selectedMeal?.duration}
        affordability={selectedMeal?.affordability}
        complexity={selectedMeal?.complexity}
      />
      <View style={styles.listOutContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    margin: 8,
  },
  detailsText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOutContainer: {
    alignItems: "center",
  },
});
