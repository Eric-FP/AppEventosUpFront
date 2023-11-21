import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native"

export default function AdmCadastrar() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.textoTitulo}>Nome Administrador</Text>
                <Text style={styles.textoTitulo2}>Cadastro de Organizador</Text>
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Nome</Text>
                <TextInput placeholder="Nome" style={styles.input}/>
                <Text style={styles.label}>E-mail</Text>
                <TextInput placeholder="E-mail" style={styles.input}/>
                <Text style={styles.label}>Senha</Text>
                <TextInput placeholder="Senha" style={styles.input}/>
                
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Administrador')}>
                    <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
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
    titulo: {
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoTitulo: {
        color: '#FFF',
        fontSize: 20
    },
    textoTitulo2: {
        color: '#FFF',
        paddingTop: 25,
        fontSize: 35,
    },
    formulario: {
        backgroundColor: '#0087D3',
        flex: 1,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    label: {
        paddingStart: '2%',
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        paddingStart: '5%',
        borderRadius: 20,
        backgroundColor: '#FFF',
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    botao: {
        backgroundColor: '#0149B6',
        width: '100%',
        borderRadius: 20,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
})