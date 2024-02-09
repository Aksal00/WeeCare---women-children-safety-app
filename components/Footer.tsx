import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,Image, Dimensions} from 'react-native'
import React from 'react'
import {openURL} from 'expo-linking';
import { LinearGradient } from 'expo-linear-gradient'

export default function Footer() {
    return (
        
        <LinearGradient colors={['#C205A3', '#A200A6', '#98009B', '#98009B']} style={[styles.Footer_bg,styles.footer_Shadow]} >
            <View style={{flexDirection:'row'}}>
                <Image
                //source={require('../assets/Government_logo.png')}
                //style={{width: 0.1*Dimensions.get('window').width, height: 0.1*Dimensions.get('window').width, }} // Adjust the width and height as needed
                />
                <Image
                source={require('../assets/usj_logo.png')}
                style={{width: 0.12*Dimensions.get('window').width, height: 0.12*Dimensions.get('window').width,marginHorizontal:0.03*Dimensions.get('window').width ,alignSelf: 'center'}} // Adjust the width and height as needed
                />
                <Text style= {styles.Text_Style_1}>Powered by,</Text>
                <Text style= {styles.Text_Style_2}>{"\n"}Department of Computer Science,{"\n"}University of Sri Jayewardenepura </Text>
                
            </View >
            
        </LinearGradient>
        

    )}

const styles = StyleSheet.create({
    Footer_bg:{
        position: 'relative',
        alignSelf:'center',
        height:0.18*Dimensions.get('window').width,
        width: Dimensions.get('window').width,
        //alignSelf:'center',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
        
    },
    Text_Style_1:{
        fontSize: 0.013*Dimensions.get('window').height,
        fontWeight: 'bold',
        color:'white',
            

    },
    Text_Style_2:{
        fontSize: 0.013*Dimensions.get('window').height,
        paddingLeft:2,
        color:'white',
        
        

    },
    footer_Shadow:{
        shadowColor: 'black',
        shadowOffset:{width:Dimensions.get('window').width,height:0.08*Dimensions.get('window').height+10},
        shadowOpacity: 1,
        //elevation: 10,
        shadowRadius:0,
        
    }


})