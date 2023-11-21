import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native"

export default function Organizador() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#0087D3' barStyle="dark-content"></StatusBar>
            <View style={styles.titulo}>
                <Text style={styles.textoTitulo}>Organizador</Text>
                <Text style={styles.textoTitulo2}>Lista de Eventos</Text>
            </View>
            <View styles={styles.container2}>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('EventoCadastrar')}>
                    <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0087D3',
    },
    container2: {
        flex: 2,
    },
    titulo: {
        flex: 2,
        paddingTop: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#FFF'
    },
    textoTitulo: {
        color: '#FFF',
        fontSize: 20
    },
    textoTitulo2: {
        color: '#FFF',
        paddingTop: 15,
        fontSize: 25,
    },
    botaoPosicao: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 40,
    },
    botao: {
        backgroundColor: '#0149B6',
        width: '100%',
        borderRadius: 20,
        paddingVertical: 8,
        marginTop: 14,
        alignItems: 'center',
        marginBottom: '10%',
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
})