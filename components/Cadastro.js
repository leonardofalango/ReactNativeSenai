import { Switch, TextInput, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";


export default function Cadastro(props) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirm, setSenhaConfirm] = useState("");
    const [idade, setIdade] = useState("");
    const [sexo, setSexo] = useState("");
    const [notificacoes, setNotificacoes] = useState(false);

    const { addUser } = props
    
    const signin = () => {  
        if (senha !== senhaConfirm || senha === "" || senhaConfirm === "") {
            alert("As senhas não coincidem");
            return;
        }

        const json = {
            nome: nome,
            email: email,
            senha: senha,
            idade: idade,
            sexo: sexo,
            notificacoes: notificacoes
        }

        addUser(json)

        alert("Usuário cadastrado com sucesso!")
        //reset dos campos

        setNome("");
        setEmail("");
        setSenha("");
        setSenhaConfirm("");
        setIdade("");
        setSexo("");
        setNotificacoes(false);

    }

    return (
        <View style={ styles.container }>
            <Text>Nome</Text>
            <TextInput
                value={nome}
                onChangeText={(text) => setNome(text)}
                style={ styles.textInput }
            />

            <Text style={ styles.mt5 }>Email</Text>
            <TextInput 
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={ styles.textInput }
            />

            <View style={ styles.flexin }>
                <View style={{width: "48%"}}>
                    <Text style={ styles.mt5 }>Idade</Text>
                    <TextInput
                        value={idade}
                        onChangeText={(text) => setIdade(text)}
                        style={ styles.textInput }
                    />
                </View>

                <View style={{width: "48%"}}>
                    <Text style={ styles.mt5 }>Sexo</Text>
                    <TextInput
                        value={sexo}
                        onChangeText={(text) => setSexo(text)}
                        style={ styles.textInput }
                    />
                    </View>
            </View>

            <Text style={ styles.mt5 }>Senha</Text>
            <TextInput
                value={senha}
                onChangeText={(text) => setSenha(text)}
                style={ styles.textInput }
                secureTextEntry
            />

            <Text style={ styles.mt5 }>Confirmar senha</Text>
            <TextInput 
                value={senhaConfirm}
                onChangeText={(text) => setSenhaConfirm(text)}
                style={ styles.textInput }
                secureTextEntry
            />

            <Text>
                Deseja receber notificações?
            </Text>
            <Switch
                value={notificacoes}
                onValueChange={
                    () => setNotificacoes(!notificacoes)
                }
            />

            <TouchableOpacity
                onPress={() => signin()}
                style={ [styles.button, styles.mt5] }
            > <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput : {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    container : {
        padding: "50px",
    },
    mt5 : {
        marginTop: ".75rem",
    },
    button: {
        backgroundColor: "#ddd",
        padding: "1rem",
        width: "100%",
        alignItems: "center",
    },
    flexin : {
        flex: 1,
        flexDirection: "row",
        gap: "2%"
    }
})