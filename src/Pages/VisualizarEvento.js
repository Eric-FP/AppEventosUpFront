import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function VisualizarEvento() {
    return (
        
        <View style={styles.container}>
            <View style={styles.informacoes}>
                
            </View>
            <View style={styles.botoes}>
            <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Inscrever-se</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Voltar</Text>
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
    informacoes: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    botoes: {
        flex: 1,
        backgroundColor: '#0087D3',
    },
    botao: {
        backgroundColor: '#0149B6',
        width: '80%',
        borderRadius: 20,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: '5%',
        marginHorizontal: '10%',
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',

    },
    botaoRegistrar: {
        marginTop: 14,
        alignItems: 'center',
    },
    textoBotaoRegistro: {
        fontSize: 16,
        color: '#a1a1a1'
    }
})