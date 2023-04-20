import { StyleSheet, View } from "react-native";
import PlacesList from "../components/Places/PlacesList";

const AllPlaces = () => {
  return <PlacesList />;
};

export default AllPlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
