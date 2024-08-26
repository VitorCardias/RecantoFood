import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./categorias.style";

function Categorias(props){
    return(
        <View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {   // aqui eu estou pegando pelas props as categorias que importei em HOME
                // e usando o map para percorrer aquele array e me retornar (categoria = objeto, index = posição)
                props.dados.map((categoria, index) => {
                    
                    return (
                        //Eu estou colocando tudo dentro de uma View e usando a prorpiedade key para não dar um aviso no codigo
                        //Na Image eu estou puxando as imagens que estão no objeto de categoria
                        //Ali no Text eu estou entrando no objeto categoria e retornando a descrição de cada um deles
                        <View key={index} style={styles.categoria}>
                            <TouchableOpacity>
                                <Image source={categoria.icone} style={styles.icone}/>
                                <Text style={styles.descricao}>{categoria.descricao}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
            </ScrollView>
        </View>
    )
}

export default Categorias;