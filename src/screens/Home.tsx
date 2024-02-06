import { Pressable, StyleSheet, Text, View,Button,Alert,TouchableOpacity,Image,ImageBackground,SafeAreaView, ScrollView,Dimensions  } from 'react-native'
import React,{useState,useEffect} from 'react'
import 'react-native-gesture-handler';
import * as Location from 'expo-location'
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../../App" 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation,useRoute } from '@react-navigation/native';
//import Components;
import FlatCards from '../../components/FlatCards'
import ElevatedCards from '../../components/ElevatedCards'
import CounselingCard from '../../components/CounselingCard'
import Footer from '../../components/Footer'
import { RouteProp } from '@react-navigation/native';

//Importing SMS Function
import {sendSMS} from '../Live_Location_Sender';

type HomeProps = NativeStackScreenProps<RootStackPramList,"Home">

const Home = () => {
    

    const navigation = useNavigation<NativeStackNavigationProp<RootStackPramList>>()
    const [Contact_1_Name, Set_Contact_1_Name] = React.useState('');
    const [Contact_1_Number, Set_Contact_1_Number] = React.useState('');
    const [Contact_2_Name, Set_Contact_2_Name] = React.useState('');
    const [Contact_2_Number, Set_Contact_2_Number] = React.useState('');
    const [Contact_3_Name, Set_Contact_3_Name] = React.useState('');
    const [Contact_3_Number, Set_Contact_3_Number] = React.useState('');
 


   

    
    useEffect(()=>{
            getData();
        },[])
    const getData = ()=>{
        try {
            AsyncStorage.getItem('contact_1_name')
                .then(value => {
                    if(value != null){
                        Set_Contact_1_Name(value);
                    }
                })
            AsyncStorage.getItem('contact_1_number')
                .then(value => {
                    if(value != null){
                        Set_Contact_1_Number(value);
                    }
                })
            AsyncStorage.getItem('contact_2_name')
                .then(value => {
                    if(value != null){
                        Set_Contact_1_Name(value);
                    }
                })
            AsyncStorage.getItem('contact_2_number')
                .then(value => {
                    if(value != null){
                        Set_Contact_1_Number(value);
                    }
                })
            AsyncStorage.getItem('contact_3_name')
                .then(value => {
                    if(value != null){
                        Set_Contact_1_Name(value);
                    }
                })
            AsyncStorage.getItem('contact_3_number')
                .then(value => {
                    if(value != null){
                        Set_Contact_1_Number(value);
                    }
                })


        } catch (error) {
            console.log(error)
        }
    }

    const defaultValue_1 =  Contact_1_Number
    const defaultValue_2 =  Contact_2_Number
    const defaultValue_3 =  Contact_3_Number

    interface Icontacts {
        contact_number_1 : string,
        contact_number_2 : string,
        contact_number_3 : string,
    }

    
    const numberStringArray = [defaultValue_1,defaultValue_2,defaultValue_3];
    const route: RouteProp<{ params: { contact_number_1 : string,
        contact_number_2 : string,
        contact_number_3 : string, } }, 'params'> = useRoute();
    const params = route.params;
    let no_1 = params?.contact_number_1
    let no_2 = params?.contact_number_2
    let no_3 = params?.contact_number_3
    const numberParamArray= [no_1,no_2,no_3]
    const MobileNoList:Array<number>=[]
 
    let i = 0
    for(i=0;i<3;i++)
    { 
        const contact_number = numberParamArray[i] || numberStringArray[i]
        const mobile_number = parseInt(contact_number, 10);
        const country_number = 94000000000 + mobile_number
        MobileNoList[i]= country_number
    }
    console.log(MobileNoList);
    let number1=MobileNoList[0]
    let number2=MobileNoList[1]
    let number3=MobileNoList[2]


    return (
        
        <SafeAreaView style={styles.container}>

            <ImageBackground 
            source={ require('../../assets/4.png')}
            //resizeMode='cover'
            style={styles.bgimg}
            imageStyle={{resizeMode: "cover"}}
            >

                
                <ScrollView>
                <ImageBackground 
                    source={ require('../../assets/Home_upper_body.png')}
                    //resizeMode='cover'
                    style={styles.bgimg_2}
                    imageStyle={{resizeMode: 'stretch',top:0,bottom:-30,width:'100%'}}
                    >

                <View style = {{paddingTop:30}}>
                    <TouchableOpacity onPress={()=>sendSMS(number1,number2,number3)}>
                        <Image
                            source={require('../../assets/Alert button 1.png')}
                            style={{width: 200, height: 200,alignSelf: 'center' }} // Adjust the width and height as needed
                        />
                    </TouchableOpacity>
                </View >
                <View style = {{paddingVertical:20}}>
                        <TouchableOpacity
                            style = {styles.Contact_List_Button}
                            onPress={()=>navigation.navigate('Contact_Details')}>
                                <Text style = {styles.Text_Button}>
                                    Add SOS Contacts
                                </Text>

                        </TouchableOpacity>
                </View>

                </ImageBackground>
                <View style={[styles.white_window_2]} >   
                    <FlatCards/> 
                </View>
                <View style={styles.white_window}> 
                    <ElevatedCards/>  
                </View>
                <View style={{paddingBottom:30}}>
                    <ImageBackground source={ require('../../assets/counseling1_dark.png')}
                                imageStyle={{marginHorizontal:15,borderTopLeftRadius:50,borderBottomRightRadius:50,paddingBottom:30}}>
                        <CounselingCard/>
                    </ImageBackground>
                    
                </View>
                <View>
                        <Image
                                    source={require('../../assets/AppLogo_white.png')}
                                    style={{alignSelf:'center',marginLeft:0,marginRight:0,width: 252, height: 135,marginVertical:20 }} // Adjust the width and height as needed
                                    />
                </View>
                <View style={styles.visionandmission}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize: 23,textAlign:'center'}}>
                    Our Vision
                    </Text>
                    <Text style={{color:'white',fontSize: 15,textAlign:'center'}}>
                    Empowering women and children to live fearlessly by providing a 
                    comprehensive safety net through our WeeCare app, fostering a world 
                    where every individual feels secure and protected
                    </Text>
                </View>
                <View style={styles.visionandmission}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize: 23,textAlign:'center'}}>
                    Our Mission
                    </Text>
                    <Text style={{color:'white',fontSize: 15,textAlign:'center',paddingBottom:30}}>
                    To leverage cutting-edge technology in creating a user-friendly platform that ensures real-time assistance, 
                    emergency response, and community support, promoting the safety and well-being of women and children globally.
                    </Text>
                </View>
                </ScrollView>
                
                
            </ImageBackground>
            
        </SafeAreaView>
        
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex :1,
        
    },
    Text_Button:{
        fontSize:0.035*Dimensions.get('window').width,
        fontWeight:"bold",
        alignSelf: 'center',
        paddingVertical:7,
        paddingHorizontal:7,
        color: '#93008D'
    },
    SMS_Button:{
        //flex:1,
        paddingTop: 60,
        height: 120,
        width : 200,
        borderRadius : 100,
        alignContent: 'center',
        alignSelf: 'center'
    },
    Contact_List_Button:{
        //flex:1,
        backgroundColor: 'white',
        borderStartColor:'black',
        height: 35,
        width : 160,
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 40,
        shadowOffset:{height:70,width:210},
        shadowColor:'black',
        elevation:10,
        shadowOpacity:1,
        
    },
    bgimg:{
        flex: 1,
    },
    bgimg_2:{
        flex: 1,
        alignSelf:'center',
        position: 'relative',
        width:"100%",
        elevation:5,
        shadowColor:'red',
        shadowOpacity:0.8,
        textShadowOffset:{width:20,height:20},
        //height:0.8*Dimensions.get("screen").height,
        top: 0,
        marginBottom:'15%'
    },
    white_window:{
        marginTop:0,
        //backgroundColor:'white',
        borderTopRightRadius:40,
        borderBottomLeftRadius:25,
        //padding:20,
        margin:15,
        backgroundColor: 'rgba(255, 255, 255,0.5)'
    },
    white_window_2:{
        marginTop:0,
        backgroundColor: 'rgba(255, 255, 255,0.5)',
        borderTopLeftRadius:40,
        borderBottomRightRadius:25,
        //padding:20,
        margin:15
    },
    dark_window:{
        backgroundColor:'white',
        borderTopRightRadius:40,
        borderBottomLeftRadius:25,
        
    },
    visionandmission:{
        alignSelf: 'center',
        color:'white',
        paddingTop: 25,
        paddingHorizontal:25
    }
})