import { StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";

const AddPlace = ({ navigation }) => {
  function createPlaceHandler(place) {
    navigation.navigate("All Places", {
      place: place,
    });
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
