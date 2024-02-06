import { ScrollView, StyleSheet, Text, View ,TouchableOpacity, ImageBackground, Dimensions} from 'react-native'
import React from 'react'
import { useNavigation,useRoute } from '@react-navigation/native';
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../App" 
export default function CounselingCard() {
    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackPramList>>()
    return (
        <View>
        <Text style ={styles.headingText}>Counseling Services</Text>
        <ScrollView style ={styles.container} contentContainerStyle={{opacity:1}}>
            <Text style={{fontSize:17,fontWeight:'bold',alignSelf:'center'}}>Book Your Therapy Session Now</Text>
            <Text style={{fontSize:13,paddingHorizontal:0,justifyContent:'center',textAlign:'center',paddingVertical:15}}>
            As the central institution of counseling services in Sri Lanka, to prevent mental imbalances, personal development, 
            provide therapeutic counseling services and coordinate organizations related to counseling to enhance mental well-being 
            and contribute to national development of every citizen.</Text>
            
            <TouchableOpacity style ={[styles.card,styles.cardElevated_6]} onPress={()=>navigation.navigate('Counseling_Services')}>
                <Text style={styles.buttonText}>More Details {'>>>'}</Text>
            </TouchableOpacity>
        </ScrollView>   
        
        </View>
    )
}

const styles = StyleSheet.create({

    headingText:{
        fontSize: 0.06*Dimensions.get('window').width,
        fontWeight: 'bold',
        //paddingHorizontal: 0,
        textAlign:'center',
        paddingTop:4,
        paddingBottom: 5,
        color: 'black',
        marginHorizontal:'20%',
        marginBottom:30,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        backgroundColor:'rgba(255,255,255,1)',
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 0.035*Dimensions.get('window').width,
        paddingHorizontal:15,
        paddingVertical:5,
        color:'white'
        

    },
    container:{
        paddingTop:10,
        backgroundColor: 'rgba(255, 255, 255,0.7)',
        paddingRight:25,
        paddingLeft:15,
        marginRight:15,
        marginLeft:15,
        marginTop:100,
        borderBottomRightRadius:50
        

    },
    card:{
        alignSelf: 'center',
        justifyContent: 'center',
        width: 0.4*Dimensions.get('window').width,
        height: 0.09*Dimensions.get('window').width,
        borderRadius: 20,
        marginBottom: 15,
        elevation: 10,
        shadowOffset:{
            width: 20,
            height: 20
        },
        shadowColor:'#F6C0FF',
        shadowOpacity:1,
        shadowRadius:4,
        
    },
    descriptionText:{
        fontSize:14,
        alignSelf:'center',
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10
        
    },
    cardElevated_1:{
        backgroundColor: '#F6C0FF',
    },
    cardElevated_2:{
        backgroundColor: '#C8B5FF',
    },
    cardElevated_3:{
        backgroundColor: '#F6C0FF',
    },
    cardElevated_4:{
        backgroundColor: '#C8B5FF',
    },
    cardElevated_5:{
        backgroundColor: '#F6C0FF',
    },
    cardElevated_6:{
        backgroundColor: '#A200A6',
    },
    bgimg:{
        flex: 1,

    },
    
})