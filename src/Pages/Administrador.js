import React, {useContext, useState} from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Button, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { API_ENDPOINT } from "../config";
import EditarCadastro from '../Pages/EditarCadastro'

export default function VisualizarEvento() {
    const navigation = useNavigation();
    const [dados, setDados] = useState();
    
    const deleteUser = async (item) =>{
        const URL = API_ENDPOINT+"/api/Administradores/"+item.idAdministrador;

        const options = {
            method: 'DELETE',
            headers: {
                Accept: '*/*',
            }
        }

        fetch(URL, options)
            .then(response => {
                if(!response.ok){
                    throw new Error('Erro na exclusão do usuário')
                }
                return response.json();
            })
            .then(responseData => {
                console.log("Resposta da requisição: ", responseData)
                Alert.alert(
                    'Exclusão!',
                    'Usuário excluído com sucesso!',
                    [
                        {
                            text: 'Ok',
                            onPress: () => {navigation.goBack()}
                        }
                    ]
                )
            })
            .catch(error => {
                console.error('Erro: ', error)
            })
    }

    function deleteConfirm(item){
        Alert.alert('Excluir usuário!', 'Tem certeza que deseja excluir o usuário?',
        [
            {
                text: "Sim",
                onPress(){
                    
                    deleteUser(item)
                }
            },
            {
                text: "Não"
            }
        ]
        )
    }
    const GET = async () => {
        
        try {
          const response = await fetch(API_ENDPOINT+"/api/Administradores");
          const data = await response.json();
            
          if (response.ok) {
            console.log(data.idAdministrador);
            setDados(data);
          } else {
            
            console.log('Erro');
          }
        } catch (error) {
          console.error('Erro: ', error);
        }
        
    }

    const renderItem = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'black', backgroundColor: '#FFF' }}>
          <Text>Nome: {item.nome}</Text>
          <Text>E-mail: {item.email}</Text>
          <Button title="Editar"  />
          <Button title="Excluir" onPress={() => {deleteConfirm(item.idAdministrador)}}/>    
        </View>
      );
    
    return (
        <View style={styles.container}>
            <View style={styles.informacoes}>
                <Text style={styles.titulo}>Cadastro de Organizadores</Text>
            </View>
            <View style={styles.lista}>
                <FlatList
                    data={dados}    
                    renderItem={renderItem}
                    keyExtractor={item => item.idAdministrador}
                />
            </View>
            <View style={styles.botoes}>
            <TouchableOpacity style={styles.botao} onPress={GET}>
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
        justifyContent: 'center',
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
        position: 'absolute'
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
    lista: {
        flex: 3,
        backgroundColor: '#0087D3',
    }
})