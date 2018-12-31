import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Text} from 'react-native';
import firebase from "firebase";
//import { firebase_read } from "../components/firebase_read";
import dbconfig from "../components/hadith_config";

export default class HadithScreen extends React.Component {
  static navigationOptions = {
    title: 'Hadith of the Day',
  };
// test funtion
  function1 () {
    firebase.database().ref('user/006').set(
      {
        name: 'Hadith6',
        value: 'Romo still rocks narrated by Zain'
     }
    )   }

  componentDidMount() {
    // firebase.database().ref('user/005').set(
    //   {
    //     name: 'Hadith5',
    //     value: 'Romo rocks narrated by Zain'
    //  }
    // ) 
  }


  render() {
    console.log('Calling firebase read in hadith.screen');
   //  <firebase_read/>;
    console.log("-->"+ dbconfig);
     

    return (
      <ScrollView style={styles.container}>
      <TouchableOpacity onPress={this.function1}>
        <Text>Test</Text>
      </TouchableOpacity>

     <Text style={styles.formatHadithText}> 
    Allah's Messenger (ﷺ) said: Islam is based on (the following) five (principles): {"\n"} {"\n"}
    1. To testify that none has the right to be worshipped but Allah and Muhammad is Allah's Messenger (ﷺ). {"\n"} {"\n"}
    2. To offer the (compulsory congregational) prayers dutifully and perfectly {"\n"} {"\n"}
    3. To pay Zakat (i.e. obligatory charity) {"\n"} {"\n"}
    4. To perform Hajj. (i.e. Pilgrimage to Mecca) {"\n"} {"\n"}
    5. To observe fast during the month of Ramadan. </Text> 
     </ScrollView>
    );
  
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  formatHadithText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
