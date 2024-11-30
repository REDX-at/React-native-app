import { StyleSheet, View, Text, Pressable } from "react-native";

export default function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.Buttoncontainer, styles.pressed]
            : styles.Buttoncontainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    width: 120,
    margin: 4,
    overflow: "hidden",
  },
  Buttoncontainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
