import { useNavigation } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen() {
  // () =>{
  //   navigation.navigate("MealsOverviewScreen", {
  //     categorId: itemData.item.id,
  //   })}
  const navigation = useNavigation();
  const pressHandler = (itemData) => {
    console.log("onPress",itemData);
  //  navigation?.navigate('MealsOverviewScreen')
    navigation.navigate("MealsOverviewScreen", {
      categoryId: itemData?.item?.id,
    });
  };
  function renderCategoryItem(itemData) {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={() => {
          pressHandler(itemData);
        }}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
