import React, {useState} from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { API_ENDPOINT } from "../config";

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    
    const handleLogin = async () => {

        try {
          const response = await fetch(API_ENDPOINT+"/api/Administradores/GetAdministradorSenhaEmail?email="+email+"&senha="+senha);
    
          const data = await response.json();
    
          if (response.ok) {
            console.log('Sucesso', 'Login bem-sucedido!', data);
            navigation.navigate("Administrador");
          } else {
            
            console.log('Erro', 'Credenciais inválidas. Tente novamente.');
          }
        } catch (error) {
          console.error('Erro ao fazer login:', error);
        }
      };

    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <View>
                    <Text style={styles.textoTitulo}>Tela de Login</Text>
                </View>
                <View style={styles.imagem}>
                    <Image source={require('../Imagens/LogoPequena.png')}/>
                </View>
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

                 <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                    <Text style={styles.textoBotao}>Acessar</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.botaoRegistrar} onPress={() => navigation.navigate("CadastroAdministrador")}>
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
        //marginTop: '14%',
        marginBottom: '10%',
        //paddingStart: '5%',
        alignItems: 'center',
        flexDirection: 'row',
        //justifyContent: 'center',
        
    },
    textoTitulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        paddingTop: '5%',
        marginLeft: 20
        
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
        marginTop: 20,
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
    },
    imagem: {
        marginLeft: '30%',
        paddingTop: '5%',
    }
})