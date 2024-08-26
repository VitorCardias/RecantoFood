import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header";
import InputBox from "../../components/inputBox/inputBox";
import Button from "../../components/button/button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigation = useNavigation();

    function ProcessarLogin() {
        console.log(email, senha)
    }

    return(
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} automaticallyAdjustKeyboardInsets={true}>
                <View style={styles.container}>
                    <Header texto="Acesse sua conta."/>
                    <View style={styles.formGroup}>
                        <View style={styles.form}>
                            <InputBox title="E-mail" onChangeText={(text) => setEmail(text)} value={email}/>
                        </View>
                        <View style={styles.form}>
                            <InputBox title="Senha" isPassword onChangeText={(text) => setSenha(text)} value={senha}/>
                        </View>
                        <View style={styles.btn}>
                            <Button style={styles.btnBox} texto="Acessar" onPress={ProcessarLogin}/>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={() => navigation.navigate("registro")}>
                            <Text style={styles.footerText}>Criar minha conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default Login;