import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"

export default function EventoCadastrar() {
    return (
        <View styles={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.textoTitulo}>Cadastro de Eventos</Text>
            </View>
            <View style={styles.formulario}>
                <View>
                    <TextInput placeholder="Nome"/>
                    <TextInput placeholder="Organizador"/>
                    <TextInput placeholder="Local"/>
                </View>
                <View >
                    <TextInput placeholder="Data"/>
                    <TextInput placeholder="Hora"/>
                    <TextInput placeholder="Duração"/>
                    <TextInput placeholder="Vagas"/>
                </View>
                <View >
                    <TextInput placeholder="Link da Imagem"/>
                    <TextInput placeholder="Descrição do evento"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0087D3',
    },
    titulo: {
        flex: 1,
        backgroundColor: '#0087D3',
    },
    textoTitulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    formulario: {
        backgroundColor: '#0087D3',
        flex: 1,
        paddingStart: '5%',
        paddingEnd: '5%',
        flexDirection: 'row',
    },
    coluna: {
        backgroundColor: '#0087D3',
        flexDirection: 'column',
    },
    linha: {
        backgroundColor: '#0087D3',
        flexDirection: 'row',
    },
})