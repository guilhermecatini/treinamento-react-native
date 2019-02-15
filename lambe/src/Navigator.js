import React from 'react'
import {
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import Clientes from './screens/Clientes'
import Notas from './screens/Notas'
import Itens from './screens/Itens'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const authRouter = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Login'
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                title: 'Register'
            }
        }
    },
    {
        initialRouteName: 'Login'
    }
)

const novaRota = createStackNavigator(
    {
        ListarClientes: {
            screen: Clientes,
            navigationOptions: {
                title: 'Listar Clientes'
            }
        },
        ListarNotas: {
            screen: Notas,
            navigationOptions: {
                title: 'Listar Notas'
            }
        },
        ListarItens: {
            screen: Itens,
            navigationOptions: {
                title: 'Listar Itens'
            }
        }
    },
    {
        initialRouteName: 'ListarClientes'
    }
)

const loginOrProfileRouter = createSwitchNavigator(
    {
        Profile: Profile,
        Auth: authRouter
    }, {
        initialRouteName: 'Profile'
    }
)

const MenuRoutes = {
    Clientes: {
        name: 'Clientes',
        screen: novaRota,
        navigationOptions: {
            title: 'Baixar Itens',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) => <Icon name="camera" size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfileRouter,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name="user" size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Clientes',
    tabBarOptions: {
        showLabel: false
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)

export default MenuNavigator