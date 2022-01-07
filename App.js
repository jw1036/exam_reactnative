import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  TextInput,
} from 'react-native';
import { theme } from './Colors';
import styles from './App.style';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});

  const work = () => setWorking(true);
  const travel = () => setWorking(false);

  const onChangeText = (payload) => setText(payload);

  const addToDo = () => {
    if (text === "") {
      return;
    }

    const newToDos = Object.assign(
      {},
      toDos,
      { [Date.now()]: { text, work: working } }
    );
    setToDos(newToDos);
    setText("");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{ ...styles.btnText, color: working ? "white" : theme.gray }}>
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{ ...styles.btnText, color: !working ? "white" : theme.gray }}>
            Travel
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        returnKeyType="done"
        value={text}
        placeholder={working ? "Add a To Do" : "Where do you want to go?"}
        style={styles.input}
      />
    </View>
  );
}
