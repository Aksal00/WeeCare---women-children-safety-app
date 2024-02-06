import { ScrollView, StyleSheet, Text, View ,TouchableOpacity, Dimensions} from 'react-native'
import React from 'react'
import { useNavigation,useRoute } from '@react-navigation/native';
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../App" 
export default function ElevatedCards() {
    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackPramList>>()
    return (
        <View>
        <Text style ={styles.headingText}>Quick Access</Text>
        <ScrollView horizontal style ={styles.container} contentContainerStyle={{paddingRight:'10%',paddingTop:10}}>
            <TouchableOpacity style ={[styles.card,styles.cardElevated_1]} onPress={()=>navigation.navigate('Ministry_of_Women')}>
                <Text style={styles.cardtext}>Ministry of Women, Child Affairs and Social Empowerment</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[styles.card,styles.cardElevated_2]} onPress={()=>navigation.navigate('National_Child_Protection_Authority')}>
                <Text style={styles.cardtext}>National Child Protection Authority</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[styles.card,styles.cardElevated_3]} onPress={()=>navigation.navigate('National_Committee_on_Women')}>
                <Text style={styles.cardtext}>National Committee on Women</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[styles.card,styles.cardElevated_4]} onPress={()=>navigation.navigate('Womens_Bureau_of_SriLanka')}>
                <Text style={styles.cardtext}>Women’s Bureau of Sri Lanka</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[styles.card,styles.cardElevated_5]} onPress={()=>navigation.navigate('National_Secretariat_for_Early_Childhood_Development')}>
                <Text style={styles.cardtext}>National Secretariat for Early Childhood Development</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[styles.card,styles.cardElevated_6]} onPress={()=>navigation.navigate('Department_of_Probation_and_Childcare_Services')}>
                <Text style={styles.cardtext}>Department of Probation and Childcare Services</Text>
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
        textAlign:'center',
        paddingTop:4,
        //borderBottomRightRadius:20,
        borderBottomLeftRadius:25,
        borderTopRightRadius:40,
        //borderTopLeftRadius:20,
        backgroundColor:'rgba(255,255,255,1)'
        //color: 'white'
    },
    cardtext:{
        textAlign: 'center',
        fontSize: 0.026*Dimensions.get('window').width,
        includeFontPadding:true,
        paddingHorizontal:10,
        

    },
    container:{
        paddingHorizontal: 18,
        paddingTop:0,
        paddingBottom:20,
        borderRadius:10,
        

    },
    card:{
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 20,
        marginTop:5,
        margin: 5,
        elevation: 5,
        shadowOffset:{
            width: 10,
            height: 5
        },
        shadowColor:'black',
        shadowOpacity:1,
        shadowRadius:14,
        
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
        backgroundColor: '#C8B5FF',    
    }
    
})