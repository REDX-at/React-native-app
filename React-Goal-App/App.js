import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";

export default function App() {
  const [enetredGoaltex, setEnetredGoaltex] = useState("");
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function goalInputHandler(enteredtext) {
    setEnetredGoaltex(enteredtext);
  }
  function addGoalHandler() {
    enetredGoaltex === ""
      ? ""
      : setGoals((currentGoals) => [
          ...currentGoals,
          { text: enetredGoaltex, id: Math.random().toString() },
        ]);
    setEnetredGoaltex("");
    setModalVisible(false);
  }

  function deletGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.buttonAdd}>
        <Button
          title="Add new Goal"
          onPress={startAddGoalHandler}
          color="red"
        />
      </View>
      {modalVisible && (
        <GoalInput
          visible={modalVisible}
          setVisible={setModalVisible}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          enetredGoaltex={enetredGoaltex}
          setGoals={setGoals}
        />
      )}
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                deletGoalHandler={deletGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 5,
    marginTop: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonAdd: {
    marginBottom: 20,
    width: "50%",
    alignSelf: "center",
  },
});
