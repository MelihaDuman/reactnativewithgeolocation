// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
// import { useFetchDataQuery, useAddDataMutation } from './apiSlice';


// export default function Data() {

//   const { data = [], isLoading, isError } = useFetchDataQuery();
//   console.log('Fecth:', data)

//   const [channel, setChannel] = useState('');
//   const [event, setEvent] = useState('');
//   const [message, setMessage] = useState('');


//   const handleChannelChange = (text) => {
//     setChannel(text);
//   }

//   const handleEventChange = (text) => {
//     setEvent(text);
//   }

//   const handleMessageChange = (text) => {
//     setMessage(text);
//   }


//   const [ addData ] = useAddDataMutation();
//   const HandleAddClick = () => {
//     const data = {
//       meli: {
//         channel: channel,
//         event: event,
//         send_message: message
//       }
//     };

//     addData(data)

//   };



//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Data Table</Text>
//       <View style={styles.formContainer}>
//         <Text style={styles.label}>Channel</Text>
//         <TextInput style={styles.input} placeholder='Enter Channel' value={channel} onChangeText={handleChannelChange}></TextInput>
//         <Text style={styles.label}>Event</Text>
//         <TextInput style={styles.input} placeholder='Enter Event' value={event} onChangeText={handleEventChange}></TextInput>
//         <Text style={styles.label}>Message</Text>
//         <TextInput style={styles.input} placeholder='Enter Message' value={message} onChangeText={handleMessageChange}></TextInput>
//         <TouchableOpacity style={styles.button} onPress={HandleAddClick}>
//           <Text style={styles.buttonText}>Add</Text>
//         </TouchableOpacity>
//       </View>

//       <>
//       {isLoading && <Text>Loading...</Text>}
//       {isError && <Text>Error</Text>}
//       {!isLoading && !isError && (
//         <View>
//           {data.data.map((item) => (
//             <View key={item.id}>
//               <Text>{item.channel}</Text>
//               <Text>{item.event}</Text>
//               <Text>{item.send_message}</Text>
//             </View>
//           ))}
//         </View>
//       )}
//       </>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   formContainer: {
//     marginTop: 20,

//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10
//   },
//   button: {
//     backgroundColor: '#007AAF',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center'
//   },

//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold'
//   },
//   fetchButton: {
//     backgroundColor: '#007AAF',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//     alignItems: 'center'
//   },


// })