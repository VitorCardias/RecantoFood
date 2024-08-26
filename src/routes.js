import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login/login';
import Registro from './screens/registro/registro';
import RegistroEndereco from './screens/registroEndereco/registroEndereco';
import Busca from './screens/busca/busca';
import { COLORS } from './constants/theme';
import Cardapio from './screens/cardapio/cardapio';

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="cardapio"
                    component={Cardapio}
                    options={{ headerShown: false}}
                />
                <Stack.Screen 
                    name="busca"
                    component={Busca}
                    options={{ headerShadowVisible: false, 
                        title: "Resultado da busca", 
                        headerTitleAlign: "center",
                        headerBackTitle: "Voltar",
                        headerStyle: {
                            backgroundColor: COLORS.light_yellow
                        },
                        headerTintColor: COLORS.dark_gray,
                    }}/>
                <Stack.Screen 
                    name="login" 
                    component={Login} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="registro" 
                    component={Registro} 
                    options={{headerShadowVisible: false, title: "", headerBackTitle: "Voltar", headerTransparent: true}}
                />
                <Stack.Screen 
                    name="registro2" 
                    component={RegistroEndereco} 
                    options={{headerShadowVisible: false, title: "", headerBackTitle: "Voltar", headerTransparent: true}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;