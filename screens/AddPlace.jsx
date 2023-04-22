import { StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlace = ({ navigation }) => {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("All Places");
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
