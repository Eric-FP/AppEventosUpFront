import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function VisualizarEvento() {
    const navigation = useNavigation();
    return (
        
        <View style={styles.container}>
            <View style={styles.informacoes}>
                <Text style={styles.titulo}>Cadastro de Organizadores</Text>
            </View>
            <View style={styles.botoes}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('AdmCadastrar')}>
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
    informacoes: {
        flex: 1,
        backgroundColor: '#0087D3',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titulo: {
        color: '#FFF',
        paddingTop: 15,
        fontSize: 25,
        marginTop: '10%',
    },
    botoes: {
        flex: 1,
        backgroundColor: '#0087D3',
        justifyContent: 'flex-end',
    },
    botao: {
        backgroundColor: '#0149B6',
        width: '80%',
        borderRadius: 20,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
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