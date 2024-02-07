import { Pressable,StyleSheet, Text,TextInput, View ,SafeAreaView,Button,Alert,ImageBackground, ScrollView,TouchableOpacity, Dimensions} from 'react-native'
import React,{useState,useEffect} from 'react'
import 'react-native-gesture-handler';

//React navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../../App"
//import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../../components/Footer'


type Contact_Details_Props = NativeStackScreenProps<RootStackPramList,"Contact_Details">

const Contact_Details = ({navigation}: Contact_Details_Props) => {

    const [Contact_1_Name, Set_Contact_1_Name] = React.useState('');
    const [Contact_1_Number, Set_Contact_1_Number] = React.useState('');
    const [Contact_2_Name, Set_Contact_2_Name] = React.useState('');
    const [Contact_2_Number, Set_Contact_2_Number] = React.useState('');
    const [Contact_3_Name, Set_Contact_3_Name] = React.useState('');
    const [Contact_3_Number, Set_Contact_3_Number] = React.useState('');

    useEffect(()=>{
        getData();
    },[])

    const setData = async() => {

        let contact_1 = false
        let contact_2 = false
        let contact_3 = false
        let msg_1=""
        let msg_2=""
        let msg_3=""

        if(((Contact_1_Number.length == 10||Contact_1_Number.length == 0))||((Contact_2_Number.length == 10||Contact_2_Number.length == 0))||((Contact_3_Number.length == 10||Contact_3_Number.length == 0 ))){
            if((Contact_1_Number.length == 10||Contact_1_Number.length == 0) ){
                contact_1=true
            }
            else{
                Alert.alert("Sorry!","Please enter valid contact numbers with their names")
                return
            }
            if((Contact_2_Number.length == 10||Contact_2_Number.length == 0) ){
                contact_2=true
            }
            else{
                Alert.alert("Sorry!","Please enter valid contact numbers with their names")
                return
            }
            if((Contact_3_Number.length == 10||Contact_3_Number.length == 0 )){
                contact_3=true
            }
            else{
                Alert.alert("Sorry!","Please enter valid contact numbers with their names")
                return
            }
            if (contact_1==true){
                try{    
                    await AsyncStorage.setItem('contact_1_name',Contact_1_Name)
                    await AsyncStorage.setItem('contact_1_number',Contact_1_Number)
                    const contact1={
                        name : Contact_1_Name,
                        number : Contact_1_Number
                    }
                    //navigation.navigate('Home',{contact_number: contact1.number})
                    msg_1 = "Contact No 1 added"
                    }
                catch (error){
                        console.log(error)
                    }
            }
            if (contact_2==true){
                try{    
                    await AsyncStorage.setItem('contact_2_name',Contact_2_Name)
                    await AsyncStorage.setItem('contact_2_number',Contact_2_Number)
                    const contact2={
                        name : Contact_2_Name,
                        number : Contact_2_Number
                    }
                    //navigation.navigate('Home',{contact_number: contact1.number})
                    msg_2 = "Contact No 2 added"
                    }
                catch (error){
                        console.log(error)
                    }
            }
            if (contact_3==true){
                try{    
                    await AsyncStorage.setItem('contact_3_name',Contact_3_Name)
                    await AsyncStorage.setItem('contact_3_number',Contact_3_Number)
                    const contact3={
                        name : Contact_3_Name,
                        number : Contact_3_Number
                    }
                    //navigation.navigate('Home',{contact_number: contact1.number})
                    msg_3 = "Contact No 3 added"
                    }
                catch (error){
                        console.log(error)
                    }
            }
            Alert.alert('SOS Contact list has updated')
          
            navigation.navigate('Home',
            {contact_number_1:Contact_1_Number,
                contact_number_2:Contact_2_Number,
                contact_number_3:Contact_3_Number
            })
        }
        else if(Contact_1_Name.length==0 || Contact_1_Number.length == 0){
            Alert.alert('Sorry!', 'Please enter contact details')
        }else if(Contact_1_Number.length != 10){
            Alert.alert('Sorry!', 'Please enter a valid contact number')
        }else if(Contact_2_Name.length==0 || Contact_2_Number.length == 0){
            Alert.alert('Sorry!', 'Please enter contact details')
        }else if(Contact_2_Number.length != 10){
            Alert.alert('Sorry!', 'Please enter a valid contact number')
        }else if(Contact_3_Name.length==0 || Contact_3_Number.length == 0){
            Alert.alert('Sorry!', 'Please enter contact details')
        }else if(Contact_3_Number.length != 10){
            Alert.alert('Sorry!', 'Please enter a valid contact number')
        }
        
    }
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
                        Set_Contact_2_Name(value);
                    }
                })
            AsyncStorage.getItem('contact_2_number')
                .then(value => {
                    if(value != null){
                        Set_Contact_2_Number(value);
                    }
                })
            AsyncStorage.getItem('contact_3_name')
                .then(value => {
                    if(value != null){
                        Set_Contact_3_Name(value);
                    }
                })
            AsyncStorage.getItem('contact_3_number')
                .then(value => {
                    if(value != null){
                        Set_Contact_3_Number(value);
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={styles.Container}>
            <ImageBackground 
            source={ require('../../assets/Background_2.png')}
            //resizeMode='cover'
            style={styles.bgimg}
            >
                <ScrollView>
                <View>

                    <View>
                        <Text style={styles.Normal_Text}> Contact 1 name:</Text>
                    </View>
                    <View>
                    <TextInput
                            style={styles.input}
                            onChangeText={Set_Contact_1_Name}
                            value={Contact_1_Name}
                            placeholder="Enter contact name here"
                            keyboardType="default"
                            autoComplete='name'
                            maxLength={25}
                        />
                    </View>
                    <View>
                        <Text style={styles.Normal_Text}> Contact 1 Number:</Text>
                    </View>
                    <TextInput
                            style={styles.input}
                            onChangeText={ Set_Contact_1_Number}
                            value={Contact_1_Number}
                            placeholder="Enter contact number here"
                            keyboardType="numeric"
                            autoComplete='tel'
                            maxLength={10}
                        />
                    <View>
                        <Text style={styles.Normal_Text}> Contact 2 name:</Text>
                    </View>
                    <View>
                    <TextInput
                            style={styles.input}
                            onChangeText={Set_Contact_2_Name}
                            value={Contact_2_Name}
                            placeholder="Enter contact name here"
                            keyboardType="default"
                            autoComplete='name'
                            maxLength={25}
                        />
                    </View>
                    <View>
                        <Text style={styles.Normal_Text}> Contact 2 Number:</Text>
                    </View>
                    <TextInput
                            style={styles.input}
                            onChangeText={ Set_Contact_2_Number}
                            value={Contact_2_Number}
                            placeholder="Enter contact number here"
                            keyboardType="numeric"
                            autoComplete='tel'
                            maxLength={10}
                        />
                    <View>
                        <Text style={styles.Normal_Text}> Contact 3 name:</Text>
                    </View>
                    <View>
                    <TextInput
                            style={styles.input}
                            onChangeText={Set_Contact_3_Name}
                            value={Contact_3_Name}
                            placeholder="Enter contact name here"
                            keyboardType="default"
                            autoComplete='name'
                            maxLength={25}
                        />
                    </View>
                    <View>
                        <Text style={styles.Normal_Text}> Contact 3 Number:</Text>
                    </View>
                    <TextInput
                            style={styles.input}
                            onChangeText={ Set_Contact_3_Number}
                            value={Contact_3_Number}
                            placeholder="Enter contact number here"
                            keyboardType="numeric"
                            autoComplete='tel'
                            maxLength={10}
                        />
                    
                        
                </View>
                <View style={styles.Submit_Button}>

                    <TouchableOpacity
                            style = {styles.Contact_List_Button}
                            onPress={setData}>
                                <Text style = {styles.Text_Button}>
                                    Save
                                </Text>

                    </TouchableOpacity>
                </View>
                </ScrollView>

            </ImageBackground>
            
        </SafeAreaView>
  )
}



export default Contact_Details

const styles = StyleSheet.create({
    Text_Button:{
        fontSize:20,
        textAlign:'center',
        color:'white',
        //fontWeight:"bold",
        paddingVertical:3
    },
    Normal_Text:{
        fontSize:19,
        paddingTop:12,
        paddingLeft:15
    },
    input: {
        alignSelf:'center',
        borderRadius:30,
        fontSize:19,
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        height: 0.1*Dimensions.get('window').width,
        width: 0.85*Dimensions.get('window').width,
        margin: 12,
        borderWidth: 1,
        //padding: 10,
        paddingHorizontal:10,
        textAlign:'center'
    },
    Submit_Button:{
        //flex:1,
        paddingTop: 20,
        paddingBottom:40,
        height: 60,
        width : 200,
        borderRadius : 100,
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent:'center'
    },
    Contact_List_Button:{
        //flex:1,
        backgroundColor: '#A200A6',
        borderStartColor:'black',
        height: 35,
        width : 160,
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 40,
        //shadowOffset:{height:40,width:180},
        //shadowRadius:40,
        //shadowColor:'black',
        elevation:3,
        //shadowOpacity:0,
        
        
    },
    bgimg:{
        flex: 1,
    },
    Container:{
        flex: 1,
    }
})