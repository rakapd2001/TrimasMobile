import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { Home, Insert, User, Update, Patroli } from './component'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { color } from 'react-native-reanimated'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const CustomDrawerContent = ({ props, navigation }) => {
  return (
    <DrawerContentScrollView {...props} >
      <DrawerItem
        label="Home"
        icon={({ icon, size, name }) => (
          <FontAwesome name="home" size={20} color='black' />
        )}
        onPress={() => navigation.navigate('Home')}
      />
      <DrawerItem
        label="User"
        icon={({ icon, size, name }) => (
          <FontAwesome name="user-alt" size={20} color='black' />
        )}
        onPress={() => navigation.navigate('User')}
      />
      <DrawerItem
        label="Patroli"
        icon={({ icon, size, name }) => (
          <FontAwesome name="shield-alt" size={20} color='black' />
        )}
        onPress={() => navigation.navigate('Patroli')}
      />
    </DrawerContentScrollView>
  )
}

const myDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#E3F2FD',
          width: 200
        }
      }}
    >
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="User" component={User} options={{ headerShown: false }} />
      <Drawer.Screen name="Patroli" component={Patroli} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="myDrawer">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
        <Stack.Screen name="Insert" component={Insert}
          options={{
            headerTitleAlign: 'center',
            headerShown: false
          }} />
        <Stack.Screen name="Update" component={Update}
          options={{
            headerTitleAlign: 'center',
            headerShown: false
          }}
        />
        <Stack.Screen name="Patroli" component={Patroli}
          options={{
            headerTitleAlign: 'center',
            headerShown: false
          }}
        />
        <Stack.Screen name="myDrawer" component={myDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
