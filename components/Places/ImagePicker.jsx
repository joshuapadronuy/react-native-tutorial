import { StyleSheet, View } from "react-native";

const ImagePicker = () => {
  function takeImageHandler() {}
  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
