import React, { useEffect } from "react";
import { Text, View } from 'react-native';
import * as Location from 'expo-location';
import LocationSlice from "./locationSlice";

export default function Maps({ navigation }) {
  const [location, setLocation] = React.useState();

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('grant location permission')
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log('Location:');
      console.log(currentLocation);
    };

    getPermissions();
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View>
      <Text>Hello</Text>
      <LocationSlice />

    </View>
  );
}
