import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";


export default function DrawerLayout() {
    return (
        <Drawer

            screenOptions={{
                drawerPosition: 'left',
                drawerActiveTintColor: '#2563eb',
                drawerType: 'front',
                drawerInactiveTintColor: '#555',
                drawerStyle: {
                    width: 270,
                    backgroundColor: "#fff"
                },
                headerStyle: {
                    backgroundColor: '#2563eb'
                },
                headerTintColor: '#fff',
                swipeEnabled: true
            }}

        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    title: 'Mini Shop',
                    drawerLabel: 'Home',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="home-outline"
                            color={focused ? '#2563eb' : '#555'}
                            size={size}
                        />
                    )
                }}

            />

            <Drawer.Screen
                name="profile"
                options={{
                    title: 'My Profile',
                    drawerLabel: 'Profile',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="person-outline"
                            color={focused ? '#2563eb' : '#555'}
                            size={size}
                        />
                    )
                }}

            />

            <Drawer.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    drawerLabel: 'Settings',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="settings-outline"
                            color={focused ? '#2563eb' : '#555'}
                            size={size}
                        />
                    )
                }}

            />


        </Drawer>
    )
}