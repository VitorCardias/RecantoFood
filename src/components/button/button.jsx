import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

function Button(props){
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.texto}>
                {props.texto}
            </Text>
        </TouchableOpacity>
    )
}
export default Button;