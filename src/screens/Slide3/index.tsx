import { ImageBackground, View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from './styles'
import { globalstyles } from '../../styles/globalstyles'
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";

export function Slide3({navigation}: MenuStackTypes) {
    return (
        <View style={styles.container}>
            <Text style={globalstyles.texto}>Slide 3</Text>
            <TouchableOpacity style={globalstyles.button}
                onPress={() => navigation.push("Slide4")}
            >
                <Text>Slide 4</Text>
            </TouchableOpacity>
        </View>
    )
}