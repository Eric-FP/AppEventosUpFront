import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function EventosDisponiveis() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

function EventosInscrito() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Eventos Disponiveis" component={EventosDisponiveis} options={{ tabBarIcon: () => <Entypo name="news" size={24} color="black" />}}/>
        <Tab.Screen name="Eventos Inscrito" component={EventosInscrito} options={{ tabBarIcon: () => <MaterialCommunityIcons name="home-import-outline" size={24} color="black" />}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0087D3',
    },
    titulo: {

    }
})