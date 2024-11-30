import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../component/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/color";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredVNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredVNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredVNumber("");
  }
  function confirmInputHandler() {
    const choseNumber = parseInt(enteredNumber);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number Has to be A number between1 and 99",
        [{ text: "Okay", style: "default", onPress: resetInputHandler }]
      );
      return;
    }
    console.log("Valid Number");
    onPickNumber(choseNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    width: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
