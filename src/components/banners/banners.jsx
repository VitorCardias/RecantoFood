import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./banners.style";

function Banners(props){
    return(
        <View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {   // aqui eu estou pegando pelas props as categorias que importei em HOME
                // e usando o map para percorrer aquele array e me retornar (categoria = objeto, index = posição)
                props.dados.map((banner, index) => {
                    
                    return (
                        <View key={index} style={styles.banner}>
                            <TouchableOpacity>
                                <Image source={banner.icone} style={styles.icone}/>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
            </ScrollView>
        </View>
    )
}

export default Banners;