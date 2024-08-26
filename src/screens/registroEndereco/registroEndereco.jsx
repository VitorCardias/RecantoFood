import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { styles } from "./registroEndereco.style";
import Header from "../../components/header/header";
import InputBox from "../../components/inputBox/inputBox";
import Button from "../../components/button/button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function RegistroEndereco(){

    const [endereco, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [cep, setCep] = useState("");

    const navigation = useNavigation();

    return(
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.container}>
                    <Header texto="Criar uma conta."/>
                    <View style={styles.formGroup}>
                        <View style={styles.formHorizontal}>
                            <View style={styles.form70}>
                                <InputBox title="Endereço" onChangeText={(text) => setEndereco(text)} value={endereco}/>
                            </View>
                            <View style={styles.form30}>
                                <InputBox title="Comple" onChangeText={(text) => setComplemento(text)} value={complemento}/>
                            </View>
                        </View>
                        <View style={styles.form}>
                            <InputBox title="Bairro" onChangeText={(text) => setBairro(text)} value={bairro}/>
                        </View>
                        <View style={styles.formHorizontal}>
                            <View style={styles.form70}>
                                <InputBox title="Cidade" onChangeText={(text) => setCidade(text)} value={cidade}/>
                            </View>
                            <View style={styles.form30}>
                                <InputBox title="UF" onChangeText={(text) => setUf(text)} value={uf}/>
                            </View>
                        </View>
                        <View style={styles.form}>
                            <InputBox title="CEP" onChangeText={(text) => setCep(text)} value={cep}/>
                        </View>
                        <View style={styles.btn}>
                            <Button style={styles.btnBox} texto="Criar minha conta" onPress={() => navigation.navigate("home")}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default RegistroEndereco;