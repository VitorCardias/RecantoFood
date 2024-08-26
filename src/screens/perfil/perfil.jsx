import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./perfil.style";
import icons from "../../constants/icons";

function Perfil(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <View style={styles.containerIcone}>
                    <Image source={icons.endereco} style={styles.icone} />
                </View>

                <View style={styles.textos}>
                    <Text style={styles.title}>Endereço</Text>
                    <Text style={styles.subTitle}>Meu endereço de entrega</Text>
                </View>

                <View style={styles.containerIcone}>
                    <Image source={icons.expandir} style={styles.iconeExpandir} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={styles.containerIcone}>
                    <Image source={icons.dados} style={styles.icone} />
                </View>

                <View style={styles.textos}>
                    <Text style={styles.title}>Meus Dados</Text>
                    <Text style={styles.subTitle}>Informações da minha conta</Text>
                </View>

                <View style={styles.containerIcone}>
                    <Image source={icons.expandir} style={styles.iconeExpandir} />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.item}>
                <View style={styles.containerIcone}>
                    <Image source={icons.logout} style={styles.icone} />
                </View>

                <View style={styles.textos}>
                    <Text style={styles.title}>Desconectar</Text>
                    <Text style={styles.subTitle}>Desconectar seu usuário deste aparelho</Text>
                </View>

                <View style={styles.containerIcone}>
                    <Image source={icons.expandir} style={styles.iconeExpandir} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Perfil;