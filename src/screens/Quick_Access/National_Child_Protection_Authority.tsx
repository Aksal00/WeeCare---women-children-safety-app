import { StyleSheet, Text,View ,SafeAreaView,Image, ImageBackground, ScrollView,TouchableOpacity, Dimensions} from 'react-native'
import React,{useState} from 'react'
import {openURL,canOpenURL} from 'expo-linking';
import 'react-native-gesture-handler';

//React navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../../../App"
import Footer from '../../../components/Footer'

type National_Child_Protection_Authority_Props = NativeStackScreenProps<RootStackPramList,"National_Child_Protection_Authority">

const National_Child_Protection_Authority = ({navigation}: National_Child_Protection_Authority_Props) => {

    const[canOpenEmail, setCanOpenEmail] = useState(false);
    canOpenURL("mailto:secretary@childwomenmin.gov.lk").then((canOpen)=>{
        setCanOpenEmail(canOpen)
    })
    const[canOpenTel_1, setcanOpenTel_1] = useState(false);
    canOpenURL("tel:0112186055").then((canOpen)=>{
        setcanOpenTel_1(canOpen)
    })
    const[canOpenTel_2, setcanOpenTel_2] = useState(false);
    canOpenURL("tel:0112187249").then((canOpen)=>{
        setcanOpenTel_2(canOpen)
    })

    return (
        <SafeAreaView style={{flex:1}}>
            
            <View style={{justifyContent:'center',flexDirection:'row',paddingLeft:25,paddingVertical:15, backgroundColor: '#89008C'}}>
            <Image
              source={require('../../../assets/Government_logo.png')}
              style={{width: 35, height: 50, }} // Adjust the width and height as needed
            />
            <Text style= {styles.Heading_text}>National Child Protection{'\n'}Authority</Text>
            </View >
            <ImageBackground source={require('../../../assets/1.jpg')} style={{flex:1, alignContent: 'center'}} resizeMode='cover' imageStyle= {{opacity:0.4}}>
            <ScrollView>
            <View style={{flex:1}}>


                    <View style={styles.content_bg} >
                        <View style={{flexDirection:'row', marginTop: 20,marginHorizontal:30}}>
                            <Text style={styles.Normal_Text}>Phone : </Text>
                            <TouchableOpacity style={styles.Call_Button} onPress={()=>openURL("tel:0112778911")} disabled={!canOpenTel_1}>
                                <Image
                                    source={require('../../../assets/mobile_receiver_white.png')}
                                    style={{marginLeft:10,marginRight:12,width: 20, height: 25, }} // Adjust the width and height as needed
                                    />
                                
                                <Text style={styles.Normal_Text_White}>0112778911</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{flexDirection:'row', marginTop: 20,marginHorizontal:30}}>
                            <Text style={styles.Normal_Text}>     Fax : </Text>
                            <TouchableOpacity style={styles.Call_Button} onPress={()=>openURL("tel:0112778915")} disabled={!canOpenTel_2}>
                                <Image
                                    source={require('../../../assets/fax.png')}
                                    style={{marginLeft:10,marginRight:12,width: 25, height: 25, }} // Adjust the width and height as needed
                                    />
                                
                                <Text style={styles.Normal_Text_White}>0112778915</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',flexWrap:'wrap', marginTop: 20,marginHorizontal:30}}>
                            <Text style={styles.Normal_Text}>E-mail : </Text>
                            <TouchableOpacity style={styles.Mail_Button} onPress={()=>openURL("mailto:ncpa@childprotection.gov.lk")} disabled={!canOpenEmail}>
                                <Image
                                    source={require('../../../assets/mail.png')}
                                    style={{marginVertical:3,marginLeft:20,marginRight:12,width: 25, height: 25, }} // Adjust the width and height as needed
                                    />
                                
                                <Text style={styles.Normal_Text_White_2}>ncpa@childprotection.gov.lk</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{flexDirection:'row', marginTop: 20,marginHorizontal:15}}>
                            <Text style={styles.Normal_Text}>Address : </Text>
                            <Text style={styles.Normal_Text}>No 330,{"\n"}Thalawathugoda Road,{"\n"}Madiwela,{"\n"}Sri Jayawardenepura,{"\n"}Sri Lanka. </Text>
                        </View>

                        <View style={{flexDirection:'row',flexWrap:'wrap', marginTop: 20,marginHorizontal:21}}>
                            <Text style={styles.Normal_Text}>Website : </Text>
                            <TouchableOpacity style={styles.Web_Button} onPress={()=>openURL("https://childprotection.gov.lk/")}>
                                <Image
                                    source={require('../../../assets/web.png')}
                                    style={{marginVertical:3,marginLeft:15,marginRight:5,width: 25, height: 25, }} // Adjust the width and height as needed
                                    />
                                
                                <Text style={styles.Normal_Text_White_3}>www.childprotection.gov.lk</Text>
                            </TouchableOpacity>
                            
                        </View>

                    </View>
                
            </View>
            </ScrollView>
 
            </ImageBackground> 
        </SafeAreaView>
         
                
        )


}
export default National_Child_Protection_Authority

const styles = StyleSheet.create({
    Heading_text:{
        marginLeft:10,
        marginRight:10,
        paddingRight:19,
        fontSize:0.044*Dimensions.get('window').width,
        //justifyContent:'center',
        alignSelf:'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    Text_Button:{
        fontSize:23,
        fontWeight:"bold"
    },
    Normal_Text:{
        fontSize:0.044*Dimensions.get('window').width,
        paddingHorizontal:12,
        paddingVertical:12,
        fontWeight: 'bold'
    },
    Normal_Text_White:{
        fontSize:19,
        color: 'white',
        fontWeight: 'bold'
    },
    Normal_Text_White_2:{
        fontSize:0.03*Dimensions.get('window').width,
        color: 'white',
        fontWeight: 'bold',
        marginRight:15,
        alignSelf: 'center'
    },
    Normal_Text_White_3:{
        fontSize:0.03*Dimensions.get('window').width,
        color: 'white',
        fontWeight: 'bold',
        marginRight:15,
        alignSelf: 'center'
    },
    content_bg:{
        flex:1,
        //backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    Call_Button:{
        //flex:1,
        paddingVertical: 5,
        paddingHorizontal:15,
        //height: 40,
        //width : 200,
        borderRadius : 100,
        alignContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#89008C',
        resizeMode:'cover'
    },
    Mail_Button:{
        //flex:1,
        paddingVertical: 5,
        //height: 40,
        //width : 270,
        borderRadius : 30,
        alignContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#89008C',
        resizeMode:'cover'
    },
    Web_Button:{
        //flex:1,
        paddingVertical: 5,
        //height: 40,
        //width : 265,
        borderRadius : 30,
        alignContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#89008C',
        resizeMode:'cover'
    }
})