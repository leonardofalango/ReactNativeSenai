import { FlatList } from "react-native";
import { View, Text } from "react-native";

const MainScreen = (props) => {
    return(
        <View style={{}}>
            <FlatList data={props.data}
            renderItem={({item}) => (
                <View style={{
                    backgroundColor: "#ccc",
                    padding: 10,
                    margin: 10,
                    borderRadius: 5,
                }}>
                <Text>{item.nome}</Text>
                <Text>{item.email}</Text>
                <Text>{item.sexo}</Text>
                <Text>{item.idade}</Text>
                </View>)}
            />
        </View>
    )
}

export default MainScreen