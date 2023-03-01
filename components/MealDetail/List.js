import { StyleSheet, View, Text } from "react-native";

function List({ data }) {

  return data.map((dataPoint) => (
    <View key={dataPoint} style = {styles.listItem}>
      <Text style = {styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
    listItem:{
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginHorizontal: 8,
        marginVertical: 4,
        backgroundColor: '#e2b497',
    },
    itemText:{
        color: '#351401',
        textAlign: 'center',
    },
});
