import { FlatList, Image, Text, View } from "react-native";
import { pedidos } from "../../constants/dados";
import icons from "../../constants/icons";
import { styles } from "./pedidos.style";
import Pedido from "../../components/pedido/pedido";

function Pedidos(){
    return (
        <View style={styles.container}>
            <FlatList
                data={pedidos}
                keyExtractor={(pedidos) => pedidos.id}
                showsVerticalScrollIndicator={false}
                //Antes era (dados) => mas eu desestruturei o dados para não precisar colocar dados.item.id
                //E ficou ({item}) => agora eu posso chamar por item direto ficando item.id
                renderItem={({item}) => {
                    return(
                        <Pedido
                            logotipo={item.logotipo}
                            nome={item.nome}
                            valor={item.vl_total}
                            dt_pedido={item.dt_pedido}
                            status={item.status}
                        />
                    )
                }}
                contentContainerStyle={styles.containerList}
                // Esse propriedade renderiza algo quando não tem dado nenhum
                ListEmptyComponent={() => {
                    return(
                        <View style={styles.empty}>
                            <Image source={icons.empty}/>
                            <Text style={styles.emptyText}>Nenhum pedido encontrado</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Pedidos;