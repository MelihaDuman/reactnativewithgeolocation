import React from "react";
import { View, Text } from "react-native";

import { Marker, Callout } from "react-native-maps";
import locationStoreSlice from "./locationStoreSlice";


export default function CustomMarker(props) {

  const { coordinate, onPress, isSelected } = props;


  return (

    <Marker coordinate={coordinate} onPress={onPress}>

      <View style={{
        backgroundColor: isSelected ? 'orange' : 'black',
        padding: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        width: 20,
        height: 20
      }} />
      <Text style={{ color: isSelected ? 'orange' : 'black' }}>Inkwell</Text>




      <Callout coordinate={coordinate} onPress={onPress}>
        <View style={{ width: 100, height: 100, padding: 10, backgroundColor: 'white' }} >
          <Text style={{ fontWeight: 'bold' }}>here</Text>
          <Text>{coordinate.latitude}</Text>
          <Text>{coordinate.longitude}</Text>
        </View>
      </Callout>


    </Marker>

  )



}

