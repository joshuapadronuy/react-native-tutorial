import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../contants/colors";

const PlacesList = ({ places }) => {
  const navigation = useNavigation();

  function selectPlaceHandler(id) {
    navigation.navigate("PlaceDetails", {
      placeId: id,
    });
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallBackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={selectPlaceHandler} />
      )}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fallBackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
