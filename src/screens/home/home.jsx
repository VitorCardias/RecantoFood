import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./home.style";
import icons from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../../components/inputBox/inputBox";
import { useState } from "react";
import Categorias from "../../components/categorias/categorias";
import {categorias, banners, restaurantes} from "../../constants/dados";
import Banners from "../../components/banners/banners";
import Restaurante from "../../components/restaurante/restaurante";

function Home(){

    const [busca, setBusca] = useState("");

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerBar}>
                <Image source={icons.logo_horizontal} style={styles.logo}/>
                <Image source={icons.cart} style={styles.cart}/>
            </View>
            <View>
                <InputBox placeholder="O que vamos pedir hoje?" onChangeText={(text) => setBusca(text)} value={busca}/>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Categorias dados={categorias}/>
                <Banners dados={banners}/>
                {
                    restaurantes.map((restaurante, index) => {
                        return(
                            <View key={index}>
                                <Restaurante
                                    logotipo={restaurante.logotipo}
                                    nome={restaurante.nome}
                                    endereco={restaurante.endereco}
                                    icone={icons.favoritoFull}
                                />
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;