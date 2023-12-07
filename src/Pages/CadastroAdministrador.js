import React, {useState} from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Switch } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { API_ENDPOINT} from "../config/index"

export default function CadastroAdministrador(){
        const [nome, setNome] = useState();
        const [email, setEmail] = useState();
        const [senha, setSenha] = useState();
        const navigation = useNavigation();
        var organizador = true;
        
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => {
            setIsEnabled(previousState => !previousState);
            organizador = !isEnabled
            console.log(organizador);
        };

    const POST = async () => {
        console.log("Enviando dados para o servidor:", { nome, email, senha, organizador });
        const URL = API_ENDPOINT+"/api/Administradores/addAdministrador/";
        const options = {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
            organizador: organizador
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
                navigation.navigate("Login");
            }
        ).catch(
            (error) => {
                console.error(error)
            }
        )
    };
    

    return(
        <View style={styles.container}>
            
            <View style={styles.titulo}>
                <View style={styles.imagem}>
                    <Image source={require('../Imagens/LogoPequena.png')}/>
                </View>
                <Text style={styles.textoTitulo}>Cadastro de Administrador</Text>
            </View>
            <View style={styles.formulario}>
                <Text style={styles.label}>Nome Completo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={(texto) => setNome(texto)}
                />
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
                <Text style={styles.label}>Organizador: NÃO / SIM</Text>
                <View style={styles.switch}>
                    <Switch
                        trackColor={{false: '#8B0000', true: '#228B22'}}
                        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.botao} onPress={POST}>
                        <Text style={styles.textoBotao}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0087D3',
    },
    titulo: {
        marginTop: '5%',
        paddingStart: '3%',
        justifyContent: 'flex-end'
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
        marginTop: 10,
    },
    input: {
        paddingStart: '5%',
        borderRadius: 20,
        backgroundColor: '#FFF',
        height: 40,
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
    imagemView: {
        marginTop: 20,
        alignItems: 'center'
    },
    switch: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    imagem: {
        justifyContent: 'flex-end',
        paddingLeft: '80%'
    }
})  