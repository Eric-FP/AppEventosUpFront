import { useRoute } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Switch } from "react-native"
import { useState } from "react";
import { API_ENDPOINT } from "../config";

export default function EditarCadastro() {
    const route = useRoute();
    const id = route.params;
    //console.log('parametros: ', route.params);
    //console.log(id);

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    var organizador = true;
    const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => {
            setIsEnabled(previousState => !previousState);
            organizador = !isEnabled
            console.log(organizador);
        };

        const PUT = async () => {
            console.log("Enviando dados para o servidor:", { nome, email, senha, organizador });
            const URL = API_ENDPOINT+"/api/Administradores/"+id;
            const options = {
              method: 'PUT',
              headers: {
                Accept: '*/*',
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
                        console.log('Status da resposta:', response.status);
                        console.log('Corpo da resposta:', response.text());
                        throw new Error('A solicitação via PUT falhou!');
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
    
    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.textoTitulo}>Editar Cadastro</Text>
                
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
                    <TouchableOpacity style={styles.botao} onPress={PUT}>
                        <Text style={styles.textoBotao}>Atualizar</Text>
                    </TouchableOpacity>
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
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoTitulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#FFF",
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