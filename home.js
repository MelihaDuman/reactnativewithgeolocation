import { useFetchDataQuery } from "./apiSlice";
import { View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { Button } from "react-native-elements";
import React, { useEffect } from "react";
import * as LocationSlice from 'expo-location';

export default function HomeScreen({ navigation }) {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError, refetch } = useFetchDataQuery(page);


  console.log(data)


  const renderItem = ({ item }) => {
    return (
      <View style={styles.tableRow} key={item.id}>
        <View style={styles.tableCell}>
          <Text style={styles.tableCellValue}>{item.channel}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.tableCellValue}>{item.event}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text style={styles.tableCellValue}>{item.send_message}</Text>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    refetch();
    setPage(page + 1);

  };



  useEffect(() => {
    refetch()
  }, [page]);



  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Data Table</Text>

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>Channel</Text>
          <Text style={styles.columnHeader}>Event</Text>
          <Text style={styles.columnHeader}>Message</Text>
        </View>

        {isError && <Text>Error</Text>}
        {!isLoading && !isError && (

          <FlatList
            data={data?.data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0}
            style={styles.listContainer}
            inverted={false}


          />


        )}
      </View>

      <Button
        title="Add Data"
        onPress={() => navigation.navigate('Add Data')}
        buttonStyle={{
          borderColor: 'rgb(247, 167, 38)',
        }}
        type="outline"
        raised
        titleStyle={{ color: 'rgb(247, 167, 38)' }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />

      <Button
        title="Maps"
        onPress={() => navigation.navigate('Maps')}
        buttonStyle={{
          borderColor: 'rgb(247, 167, 38)',
        }}
        type="outline"
        raised
        titleStyle={{ color: 'rgb(247, 167, 38)' }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />

      <Button
        title="Locations"
        onPress={() => navigation.navigate('Location Slice')}
        buttonStyle={{
          borderColor: 'rgb(247, 167, 38)',
        }}
        type="outline"
        raised
        titleStyle={{ color: 'rgb(247, 167, 38)' }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />


      <Button
        title="Manual Connection"
        onPress={() => navigation.navigate('Manual Connection')}
        buttonStyle={{
          borderColor: 'rgb(247, 167, 38)',
        }}
        type="outline"
        raised
        titleStyle={{ color: 'rgb(247, 167, 38)' }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    </View>
  );
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
  tableContainer: {
    width: '100%',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  columnHeader: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableCellValue: {
    textAlign: 'center',
  },

  heading: {
    color: 'orange',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',

  },

  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },

})