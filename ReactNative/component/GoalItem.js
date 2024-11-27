import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ itemData, deletGoalHandler, id }) {
  return (
    <View style={styles.item}>
      <Pressable
        // android_ripple={{ color: "#dddddd" }}
        onPress={deletGoalHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.presseditem}
      >
        <Text style={styles.goaltext}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "black",
    color: "white",
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 12,
  },
  presseditem: {
    opacity: 0.5,
  },
  goaltext: {
    padding: 10,
    color: "white",
  },
});
