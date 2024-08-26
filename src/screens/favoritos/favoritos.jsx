import { FlatList, Image, Text, View } from "react-native";
import { restaurantes } from "../../constants/dados";
import Restaurante from "../../components/restaurante/restaurante";
import icons from "../../constants/icons";
import { styles } from "./favoritos.style";

function Favoritos(){
    return (
        <View style={styles.container}>
            <FlatList
                data={restaurantes}
                keyExtractor={(restaurantes) => restaurantes.id}
                showsVerticalScrollIndicator={false}
                //Antes era (dados) => mas eu desestruturei o dados para não precisar colocar dados.item.id
                //E ficou ({item}) => agora eu posso chamar por item direto ficando item.id
                renderItem={({item}) => {
                    return(
                        <Restaurante 
                            nome={item.nome}
                            endereco={item.endereco}
                            logotipo={item.logotipo}
                            icone={icons.remove}
                        />
                    )
                }}
                contentContainerStyle={styles.containerList}
                // Esse propriedade renderiza algo quando não tem dado nenhum
                ListEmptyComponent={() => {
                    return(
                        <View style={styles.empty}>
                            <Image source={icons.empty}/>
                            <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Favoritos;