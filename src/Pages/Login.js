import React, {useState} from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { API_ENDPOINT } from "../config";

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    
    const POST = async () => {
        console.log("Enviando dados para o servidor:", { email, senha });
        const URL = API_ENDPOINT+"/api/Administradores/GetAdministradorSenhaEmail?";
        const options = {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            senha: senha
          }),
        };
        console.log(options.body);
        fetch(URL, options).then(
            (response)=>{
                if(!response.ok){
                    console.log(response.body)
                    throw new Error('A solicitação via POST falhou!')
                }
                return response.json();
            }
        ).then(
            (dadosRecebidos) => {
                console.log('Resposta do servidor: ', dadosRecebidos)
            }
        ).catch(
            (error) => {
                console.error(error)
            }
        )
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.titulo}>
                <Text style={styles.textoTitulo}>Tela de Login</Text>
            </View>
            
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={(texto) => setEmail(texto)}
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={(texto) => setSenha(texto)}
                />

                 <TouchableOpacity style={styles.botao} onPress={POST}>
                    <Text style={styles.textoBotao}>Acessar</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.botaoRegistrar} onPress={ () =>navigation.navigate('CadastroAdministrador')}>
                    <Text style={styles.textoBotaoRegistro}>Não possui uma conta? Cadastre-se</Text>
                 </TouchableOpacity>
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