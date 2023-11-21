import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function Login() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require("../Imagens/Logo.png")}>
            </Image>
            <View style={styles.titulo}>
                <Text style={styles.textoTitulo}>Tela de Login</Text>
            </View>
            
            <View style={styles.formulario}>
                 <Text style={styles.label}>Email</Text>
                 <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                 />
                 <Text style={styles.label}>Senha</Text>
                 <TextInput
                    placeholder="Senha"
                    style={styles.input}
                 />

                 <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Administrador')}>
                    <Text style={styles.textoBotao}>Acessar</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.botaoRegistrar} onPress={ () =>navigation.navigate('CadastroAdministrador')}>
                    <Text style={styles.textoBotaoRegistro}>Não possui uma conta? Cadastre-se</Text>
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
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
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
    botaoRegistrar: {
        marginTop: 14,
        alignItems: 'center',
    },
    textoBotaoRegistro: {
        fontSize: 16,
        color: '#a1a1a1'
    }
})