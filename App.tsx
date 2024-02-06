import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,useColorScheme,Image, Dimensions, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';

import React from 'react'
import {} from 'react-native'
import * as SplashScreen from 'expo-splash-screen';

//Navigation
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens
import Home from './src/screens/Home'
import Contact_Details from './src/screens/Contact_Details'
import Ministry_of_Women from './src/screens/Quick_Access/Ministry_of_Women'
import National_Child_Protection_Authority from './src/screens/Quick_Access/National_Child_Protection_Authority'
import National_Committee_on_Women from './src/screens/Quick_Access/National_Committee_on_Women'
import Womens_Bureau_of_SriLanka from './src/screens/Quick_Access/Womens_Bureau_of_SriLanka'
import National_Secretariat_for_Early_Childhood_Development from './src/screens/Quick_Access/National_Secretariat_for_Early_Childhood_Development'
import Department_of_Probation_and_Childcare_Services from './src/screens/Quick_Access/Department_of_Probation_and_Childcare_Services'
import Counseling_Services from './src/screens/Quick_Access/Counseling_Services'
//Footer
import Footer from './components/Footer'
import { rgbaColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export type RootStackPramList = {
    //Home: {contact_list: Contact_List}
    Home: {contact_number_1: string ;contact_number_2: string;contact_number_3: string};
    Contact_Details: undefined;
    Ministry_of_Women: undefined;
    National_Child_Protection_Authority: undefined;
    National_Committee_on_Women: undefined;
    Womens_Bureau_of_SriLanka: undefined;
    National_Secretariat_for_Early_Childhood_Development: undefined;
    Department_of_Probation_and_Childcare_Services: undefined;
    Counseling_Services: undefined;
}

const Stack = createNativeStackNavigator<RootStackPramList>()


const App = () => {


    SplashScreen.preventAutoHideAsync();
    setTimeout(SplashScreen.hideAsync, 2000);



    return (
      
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                 name= "Contact_Details"
                 component={Contact_Details}
                 options = {{
                    title: "Contact Details",
                    animation:'ios',
                    headerStyle: {
                        backgroundColor: '#9C00A2',            
                      },
                      headerTintColor: '#ffffff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:0.05*Dimensions.get('window').width,
                        color:'white'
                      },
                      headerRight:()=>(
                        <View>
                                <Image
                                    source={require('./assets/AppLogo_white.png')}
                                    style={{marginLeft:0,marginRight:10,width: 63, height: 33, }} // Adjust the width and height as needed
                                    />
                        </View>
                      )
                 }}/>
                <Stack.Screen 
                 name= "Home"
                 component={Home}
                 options = {{
                    title: "Home",
                    animation:'ios',
                    headerStyle: {
                        backgroundColor: '#9C00A2',            
                      },
                      headerTintColor: '#ffffff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:0.05*Dimensions.get('window').width,
                        color:'white'
                      },
                      headerRight:()=>(
                        <View>
                                <Image
                                    source={require('./assets/AppLogo_white.png')}
                                    style={{marginLeft:0,marginRight:10,width: 63, height: 33, }} // Adjust the width and height as needed
                                    />
                        </View>
                      )
                 }}/>
                <Stack.Screen 
                 name= "Ministry_of_Women"
                 component={Ministry_of_Women}
                 options = {{
                    title: "",
                    animation:'ios',
                    headerStyle: {
                        backgroundColor: '#9C00A2',            
                      },
                      headerTintColor: '#ffffff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:0.05*Dimensions.get('window').width,
                        color:'white'
                      },
                      headerRight:()=>(
                        <View>
                                <Image
                                    source={require('./assets/AppLogo_white.png')}
                                    style={{marginLeft:0,marginRight:10,width: 63, height: 33, }} // Adjust the width and height as needed
                                    />
                        </View>
                      )
                 }}/>
                 <Stack.Screen 
                 name= "National_Child_Protection_Authority"
                 component={National_Child_Protection_Authority}
                 options = {{
                    title: "",
                    animation:'ios',
                    headerStyle: {
                        backgroundColor: '#9C00A2',            
                      },
                      headerTintColor: '#ffffff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:0.05*Dimensions.get('window').width,
                        color:'white'
                      },
                      headerRight:()=>(
                        <View>
                                <Image
                                    source={require('./assets/AppLogo_white.png')}
                                    style={{marginLeft:0,marginRight:10,width: 63, height: 33, }} // Adjust the width and height as needed
                                    />
                        </View>
                      )
                 }}/>
                <Stack.Screen 
                 name= "National_Committee_on_Women"
                 component={National_Committee_on_Women}
                 options = {{
                    title: "",
                    animation:'ios',
                    headerStyle: {
                        backgroundColor: '#9C00A2',            
                      },
                      headerTintColor: '#ffffff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:0.05*Dimensions.get('window').width,
                        color:'white'
                      },
                      headerRight:()=>(
                        <View>
                                <Image
                                    source={require('./assets/AppLogo_white.png')}
                                    style={{marginLeft:0,marginRight:10,width: 63, height: 33, }} // Adjust the width and height as needed
                                    />
                        </View>
                      )
                 }}/>
                 <Stack.Screen
                 name= "Womens_Bureau_of_SriLanka"
                 component={Womens_Bureau_of_SriLanka}
                 options = {{
                    title: "",
                    animation:'ios',
                    headerStyle: {
                        backgroundColor: '#9C00A2',            
                      },
                      headerTintColor: '#ffffff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:0.05*Dimensions.get('window').width,
                        color:'white'
                      },
                      headerRight:()=>(
                        <View>
                                <Image
                                    source={require('./assets/AppLogo_white.png')}
                                    style={{marginLeft:0,marginRight:10,width: 63, height: 33, }} // Adjust the width and height as needed
                                    />
                        </View>
                      )
                 }}/>
                <Stack.Screen 
                 name= "National_Secretariat_for_Early_Childhood_Development"
                 component={National_Secretariat_for_Early_Childhood_Development}
                 options = {{
                    title: "",
                    animation:'ios',
                    headerStyle: {
                        backgroundColor: '#9C00A2',            
                      },
                      headerTintColor: '#ffffff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:0.05*Dimensions.get('window').width,
                        color:'white'
                      },
                      headerRight:()=>(
                        <View>
                                <Image
                                    source={require('./assets/AppLogo_white.png')}
                                    style={{marginLeft:0,marginRight:10,width: 63, height: 33, }} // Adjust the width and height as needed
                                    />
                        </View>
                      )
                 }}/>
                 <Stack.Screen 
                 name= "Department_of_Probation_and_Childcare_Services"
                 component={Department_of_Probation_and_Childcare_Services}
                 options = {{
                    title: "",
                    animation:'ios',
                    headerStyle: {
                        backgroundColor: '#9C00A2',            
                      },
                      headerTintColor: '#ffffff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:0.05*Dimensions.get('window').width,
                        color:'white'
                      },
                      headerRight:()=>(
                        <View>
                                <Image
                                    source={require('./assets/AppLogo_white.png')}
                                    style={{marginLeft:0,marginRight:10,width: 63, height: 33, }} // Adjust the width and height as needed
                                    />
                        </View>
                      )
                 }}/>
                <Stack.Screen 
                 name= "Counseling_Services"
                 component={Counseling_Services}
                 options = {{
                    title: "",
                    animation:'ios',
                    headerStyle: {
                        backgroundColor: '#9C00A2',            
                      },
                      headerTintColor: '#ffffff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:0.05*Dimensions.get('window').width,
                        color:'white'
                      },
                      headerRight:()=>(
                        <View>
                                <Image
                                    source={require('./assets/AppLogo_white.png')}
                                    style={{marginLeft:0,marginRight:10,width: 63, height: 33, }} // Adjust the width and height as needed
                                    />
                        </View>
                      )
                 }}/>

              
            </Stack.Navigator> 
            
            <Footer/>
        </NavigationContainer>
        
        
    )
  

}

export default App


  

  
