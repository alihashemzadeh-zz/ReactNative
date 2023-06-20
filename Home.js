import { React} from 'react';
import {Text, TextInput, SafeAreaView, View, Button, Image, FlatList, Pressable } from 'react-native';
import styles from "./App.module.css";
export default Home=({navigation})=>{
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.desingCircle1}></View>
          <View style={styles.desingCircle2}></View>
          <Text style={styles.text}>Welcome</Text>    
          <TextInput style={styles.textBox} placeholder='Username'></TextInput>  
          <TextInput style={styles.textBox} placeholder='Password'></TextInput>  
          <Pressable onPress={navigation.navigate('FlexBox')}><Text style={styles.button}>Login</Text></Pressable>
        </SafeAreaView>
      );
    
}