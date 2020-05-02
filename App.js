import * as React from 'react';
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { DATA, TESTDATA } from './Data';

function Icon(props) {
  return (
    <View style={styles.iconGroup}>
      <Text style={styles.iconNames} >{props.name}: </Text>
      <Ionicons name={props.name} size={30} color={'#2f95dc'} />
      <Text style={styles.iconNames}> : </Text>
    </View>
  );
}

export default function App () {
  
  return (
    <ScrollView>
      <View style={styles.itemsContainer}>
        {DATA.map((iconName) => <Icon key={iconName} name={iconName} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  iconGroup: {
    flexDirection: "row", 
    alignItems: "center",
  },
  iconNames: {
    fontSize: 9,
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
    margin: 5,
    marginTop: 20,
    borderColor: "darkblue",
    borderWidth: 2,
    borderRadius: 10,    
  },
});
