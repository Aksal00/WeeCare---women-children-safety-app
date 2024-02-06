import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import {StatusBar} from 'expo-status-bar';
import {openURL} from 'expo-linking';


export default function FlatCards() {
  return (
    <View>
      <Text style ={styles.headingText}>Helpline</Text>
      
      <ScrollView horizontal style = {styles.container} contentContainerStyle={{paddingRight:'70%',paddingTop:10}}>
        <TouchableOpacity style = {[styles.card]} onPress={()=>openURL("tel:1929")}>
          <Image
              source={require('../assets/Child helpline.png')}
              style={{width: 125, height: 100,borderTopLeftRadius:20,resizeMode: 'cover' }} // Adjust the width and height as needed
            />
            <Text style = {[styles.cardText]}>Child Helpline</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.card} onPress={()=>openURL("tel:1938")}>
          <Image
              source={require('../assets/Women helpline.png')}
              style={{width: 125, height: 100,resizeMode: 'cover' }} // Adjust the width and height as needed
            />
            <Text style = {[styles.cardText]}>Women Helpline</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.card]} onPress={()=>openURL("tel:1919")}>
          <Image
              source={require('../assets/Government information center.png')}
              style={{width: 125, height: 100,borderTopRightRadius:20,resizeMode: 'cover' }} // Adjust the width and height as needed
            />
            <Text style = {[styles.cardText]}>Government Information Center</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 0.06*Dimensions.get('window').width,
        fontWeight: 'bold',
        paddingHorizontal: 0.06*Dimensions.get('window').width,
        paddingVertical: 0.02*Dimensions.get('window').width,
        textAlign: 'center',
        borderBottomRightRadius:25,
        borderTopLeftRadius:40,
        backgroundColor:'rgba(255,255,255,1)',
        color: 'black'
    },
    container:{
      //Width: '10%',
      //backgroundColor:'white',
      position: 'relative',
      //alignContent:'center',
      //alignSelf:'center',
      flexDirection: 'row',
      paddingRight:'20%',
      //paddingHorizontal: '0%',
      paddingBottom:'4%',
      //paddingHorizontal: 18,
      //alignItems:'center',
      
      resizeMode:'cover'
      
    },
    card:{
      
      flex: 1,
      borderRadius: 10,
      //marginHorizontal: 8,
      resizeMode:'cover',
      marginVertical:8,
      paddingHorizontal:'19%',
      //elevation: 1,
      shadowOffset:{
            width: 10,
            height: 5
        },
      shadowColor:'black',
      shadowOpacity:1,
      shadowRadius:14,
      
    },

    cardText:{
      flex :1,
      fontSize:0.03*Dimensions.get('window').width,
      paddingBottom:5,
      //paddingVertical:5,
      width:125,
      height:40,
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor: '#F6C0FF',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
    },

})