import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";

function MealsOverviewScreen() {
  return (
    <View style={StyleSheet.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
