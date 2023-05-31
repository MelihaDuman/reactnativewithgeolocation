import { StyleSheet, View } from 'react-native';
//import Data from './data';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import api from './apiSlice';
import { store } from './store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import AddDataScreen from './addDataScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import Maps from './maps';
import LocationSlice from './locationSlice';
//import ManualConnection from './ManualConnection';

const Stack = createStackNavigator();

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={api}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <Stack.Navigator>

              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Add Data" component={AddDataScreen} />
              <Stack.Screen name="Maps" component={Maps} />
              <Stack.Screen name="Location Slice" component={LocationSlice} />
         

            </Stack.Navigator>
          </QueryClientProvider>
        </NavigationContainer>
      </ApiProvider>
    </Provider>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
