
import React, { useState, useRef,useEffect } from 'react';
import {StatusBar} from 'expo-status-bar'
import { View, Button, Alert,PermissionsAndroid } from 'react-native';

import * as SMS from 'expo-sms'
import * as Location from 'expo-location'



    const checkSMS = async ()=>{
      //check if the device has sms capabilities or not
      const isAvailable = await SMS.isAvailableAsync();
      if (!isAvailable){
        //alert('SMS is available on this device')
        Alert.alert('SMS is not available on this device.')
        return
      } 
    }   
    //This function sends the message to the number
    export const sendSMS = async (numberParam_1:number,numberParam_2:number,numberParam_3:number)=>{

      if((numberParam_1==0)||(numberParam_2==0)||(numberParam_3==0)){
        Alert.alert('Sorry!','SOS contact list is empty.')
        return
      }
      checkSMS()
     let { status } = await Location.requestForegroundPermissionsAsync();
     if (status === 'granted') {
       let location = await Location.getCurrentPositionAsync({});
       let receiver_number_1 = numberParam_1.toString()
       let receiver_number_2 = numberParam_2.toString()
       let receiver_number_3 = numberParam_3.toString()
      const all_receiver_number=[receiver_number_1,receiver_number_2,receiver_number_3]
       let receiver_numbers: string[]=[]
      for( let i=0;i<all_receiver_number.length;i++){
        if(all_receiver_number[i])
        {
          receiver_numbers.push(all_receiver_number[i])
        }
      }
       let latitude =location.coords.latitude
       let longitude = location.coords.longitude
  
       let message = 'This is an emergency! I need your help. Here is my location :- https://www.google.com/maps/dir//'+latitude+','+longitude
       const {result} = await SMS.sendSMSAsync(receiver_numbers,message);
       if (result === 'sent'){
         Alert.alert('Message sent successfully.')
       }else{
         Alert.alert('Message delivery failed')
       }
    }
  }

    
  

