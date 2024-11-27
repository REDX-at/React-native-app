import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

export default function GoalInput({
  goalInputHandler,
  addGoalHandler,
  enetredGoaltex,
  setGoals,
  visible,
  setVisible,
}) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/Goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course Goal!"
          value={enetredGoaltex}
          onChangeText={goalInputHandler}
        />
        <View style={styles.clear}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="black" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => {
                setVisible(false);
              }}
              color="red"
            />
          </View>
          {/* <Button
            title="Clear List"
            onPress={() => {
              setGoals([]);
            }}
          /> */}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    color: "black",
    paddingLeft: 20,
    width: "100%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "#f9f9f9",
    paddingVertical: 20,
    fontSize: 20,
    borderRadius: 15,
    fontWeight: "bold",
  },
  clear: {
    // gap: 5,
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
