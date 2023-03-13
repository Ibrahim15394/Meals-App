import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/Favorites-context";

function FavoritesScreen (){

//   const FavoritesMealsCtx = useContext(FavoritesContext);  
const favoriteMealId = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) => favoriteMealId?.includes(meal.id));


  if (favoriteMeals.length === 0){
    return (
        <View style = {styles.container}>
            <Text  style = {styles.text}>You have no Favorite Meals yet.</Text>
        </View>
    );
  }

    return(
    <MealsList items = {favoriteMeals} />
    );
}

export default FavoritesScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: '500'
    },
});