import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { styles } from "./registro.style";
import Header from "../../components/header/header";
import InputBox from "../../components/inputBox/inputBox";
import Button from "../../components/button/button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function Registro(){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha1, setSenha1] = useState("");
    const [senha2, setSenha2] = useState("");

    const navigation = useNavigation();

    return(
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.container}>
                    <Header texto="Criar uma conta."/>

                    <View style={styles.formGroup}>
                        <View style={styles.form}>
                            <InputBox title="Nome Completo" onChangeText={(text) => setNome(text)} value={nome}/>
                        </View>
                        <View style={styles.form}>
                            <InputBox title="E-mail" onChangeText={(text) => setEmail(text)} value={email}/>
                        </View>
                        <View style={styles.form}>
                            <InputBox title="Escolha uma senha" isPassword onChangeText={(text) => setSenha1(text)} value={senha1}/>
                        </View>
                        <View style={styles.form}>
                            <InputBox title="Confirme a senha" isPassword onChangeText={(text) => setSenha2(text)} value={senha2}/>
                        </View>
                        <View style={styles.btn}>
                            <Button style={styles.btnBox} texto="Próximo" onPress={() => navigation.navigate("registro2")}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default Registro;