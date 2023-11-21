import React, {useState} from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function CadastroVisitante(){
        const [nome, setNome] = useState();
        const [email, setEmail] = useState();
        const [senha, setSenha] = useState();
        const [cidade, setCidade] = useState();
        const [telefone, setTelefone] = useState();

    const POST = async () => {
        console.log("Enviando dados para o servidor:", { nome, email, senha, cidade, telefone });
        const URL = "https://localhost:7193/api/Administradores/addAdministrador/";
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
            cidade: cidade,
            telefone: telefone
          }),
        };
        fetch(URL, options).then(
            (response)=>{
                if(!response.ok){
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
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.textoTitulo}>Cadastro de Visitante</Text>
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
                <Text style={styles.label}>Cidade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    value={cidade}
                    onChangeText={(texto) => setCidade(texto)}
                />
                <Text style={styles.label}>Telefone</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={(texto) => setTelefone(texto)}
                />
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
}) 