//  import { useFetchDataQuery } from "./apiSlice";
//  import { View, Text, StyleSheet } from 'react-native';
//  import React from "react";

//  export default function DataCard() {
//    const { data } = useFetchDataQuery();

//    return (
//      <View>
//        {data?.data.map((item) => (
//          <View style={styles.tableRow} key={item.id}>
//            <View style={styles.tableCell}>
//              <Text style={styles.tableCellValue}>{item.channel}</Text>
//            </View>
//            <View style={styles.tableCell}>
//            <Text style={styles.tableCellValue}>{item.event}</Text>
//            </View>
//            <View style={styles.tableCell}>
//              <Text style={styles.tableCellValue}>{item.send_message}</Text>
//            </View>
//          </View>
//        ))}
//      </View>
//    );
//  }

//  const styles = StyleSheet.create({
//  tableRow: {
//      flexDirection: 'row',
//      justifyContent: 'space-between',
//     marginBottom: 10,
//    },
//    tableCell: {
//      flex: 1,
//      textAlign: 'center',
//    },
//    tableCell: {
//      flex: 1,
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//    tableCellValue: {
//      textAlign: 'center',
//    },
//  });
