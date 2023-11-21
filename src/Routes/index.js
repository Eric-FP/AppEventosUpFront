import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BemVindo from '../Pages/BemVindo'
import Login from '../Pages/Login'
import Cadastro from '../Pages/Cadastro';
import Administrador from '../Pages/Administrador';
import AdmCadastrar from '../Pages/AdmCadastrar';
import EventoCadastrar from '../Pages/EventoCadastrar';
import Organizador from '../Pages/Organizador';
import CadastroAdministrador from '../Pages/CadastroAdministrador';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='BemVindo'
                component={BemVindo}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='Administrador'
                component={Administrador}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='AdmCadastrar'
                component={AdmCadastrar}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='Organizador'
                component={Organizador}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='EventoCadastrar'
                component={EventoCadastrar}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='CadastroAdministrador'
                component={CadastroAdministrador}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}