import { TouchableOpacity, TextInput, View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const login = () => {
        props.navigation.navigate("MainScreen", { email: email, senha: senha })
    }

    return (
        <View style={ styles.container }>
            <View style={{width:300}}>
                <Text style={styles.loginTitle}>
                    Login
                </Text>
            </View>
            <View style={{width:300}}>
                <TextInput 
                    placeholder="E-mail"
                    maxLength={50}
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)}
                    style={ styles.containerInput }
                />

                <TextInput 
                    placeholder="Senha"
                    maxLength={50}
                    secureTextEntry={true}
                    onChangeText={(text) => setSenha(text)}
                    style={ styles.containerInput }
                />
            </View>

            <View style={{width:300}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("mainScreen")}
                    style={ styles.buttonInput }
                >
                    <p>
                        Login
                    </p>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("cadastro")}
                    title="Cadastrar"
                    style={ styles.buttonInput }
                >
                    <p>
                        Cadastrar
                    </p>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
    },

    containerInput: {
        width: "100%",
        padding: 10,
        fontSize: 18
    },

    buttonInput : {
        width: "100%",
        marginTop: "10px",
        padding: 7,
        backgroundColor: "#F2C94C",
        borderRadius: 10,

    },
    loginTitle: { 
        fontSize: 50,
        textTransform: "uppercase",
        fontWeight: "bold",
        marginBottom: 50,
    },
    login : {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    }
    
})