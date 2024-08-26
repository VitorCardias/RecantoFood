import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./restaurante.style";

function Restaurante(props){
    return(
        <View style={styles.restaurante}>
            <Image source={props.logotipo} style={styles.logotipo}/>
            <View style={styles.textos}>
                <Text style={styles.nome}>{props.nome}</Text>
                <Text style={styles.endereco}>{props.endereco}</Text>
            </View>
            <TouchableOpacity style={styles.containerFavorito}>
                <Image source={props.icone} style={styles.favorito}/>
            </TouchableOpacity>
        </View>
    )
}

export default Restaurante;