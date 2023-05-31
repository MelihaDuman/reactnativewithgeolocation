import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import { useAddDataMutation } from "./apiSlice";


export default function AddDataScreen({ navigation }) {
  const [channel, setChannel] = React.useState('');
  const [event, setEvent] = React.useState('');
  const [message, setMessage] = React.useState('');



  const [addData] = useAddDataMutation();

  const handleAddData = () => {
    const data = {
      meli: {
        channel: channel,
        event: event,
        send_message: message,
      },
    }

    addData(data)

    navigation.navigate('Home');

  }



  return (

    <View>
      <Text style={styles.heading}>Add Data</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Channel"
        value={channel}
        onChangeText={setChannel}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Event"
        value={event}
        onChangeText={setEvent}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Message"
        value={message}
        onChangeText={setMessage}
      />

      <Button title="Add" onPress={handleAddData}

        buttonStyle={{
          borderColor: 'rgb(247, 167, 38)',
        }}
        type="outline"
        raised
        titleStyle={{ color: 'rgb(247, 167, 38)', textAlign: 'center' }}
        containerStyle={{
          width: 200,
          marginHorizontal: 85,
          marginVertical: 10,
        }}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  heading: {
    color: 'orange',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',

  },
});