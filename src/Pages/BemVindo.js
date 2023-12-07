import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function BemVindo() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            
            <View>
                <Image source={require('../Imagens/Logo.png')}/>
                <Text style={styles.titulo}>Eventos UP</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.botao} onPress={ () => navigation.navigate('Login')}>
                    <Text style={styles.textoGrande}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0087D3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '10%'
    },
    textoGrande: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    botao: {
        marginTop: '30%',
        backgroundColor: '#FFFFFF',
        padding: '5%',
        borderRadius: 25,
        paddingHorizontal: '25%'
    },
    imagem: {
        
    }
})