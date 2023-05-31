import React from "react";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import CustomMarker from "./customMarker";
import locationStoreSlice from "./locationStoreSlice";


export default function LocationSlice() {
  const handleNavigateHome = () => {
    navigation.navigate('Home');
  };

  const [selectedPlaceId, setSelectedPlaceId] = React.useState();

  const [mylocation, setMyLocation] = React.useState();

  const currentLocationId = 'currentLocation';

  React.useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('grant location permission')
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setMyLocation(currentLocation);
      console.log('Location:');
      console.log(currentLocation);
    };

    getPermissions();

  }, []);




  return (
    <View style={{ width: '100%', height: '100%' }}>
      <MapView style={{ width: '100%', height: '100%' }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 45.406820714352705,
          longitude: 11.879521989852064,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >



        {locationStoreSlice.map(location =>
          <CustomMarker
            isSelected={location.id === selectedPlaceId}
            onPress={() => {
              setSelectedPlaceId(location.id)
            }}
            coordinate={location.coordinate}
          />)}

        {mylocation &&
          <CustomMarker
            isSelected={currentLocationId === selectedPlaceId}
            onPress={() => {
              setSelectedPlaceId(currentLocationId)
            }}
            coordinate={mylocation.coords}
          />
        }



      </MapView>


    </View>
  );
}
