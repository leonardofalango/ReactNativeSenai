import { Button, View } from "react-native-web";

export default function Login({ navigation }) {
    return (
        <View>
            <Button
                onPress={() => navigation.navigate("cadastro")}
                title="Cadastrar"
            >
                Cadastrar
            </Button>
        </View>
    )
}