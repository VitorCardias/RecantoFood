import { Image, Text, View } from "react-native";
import icons from "../../constants/icons.js"
import { styles } from "./header.style";

function Header(props){
    return(
        <View style={styles.container}>
            <Image style={styles.imagem} source={icons.logo_vertical}/>
            <Text style={styles.texto}>{props.texto}</Text>
        </View>
    )
}
export default Header;