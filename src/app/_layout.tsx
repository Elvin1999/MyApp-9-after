import { FavoritesProvider } from "@/context/FavoriteContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2563eb"
          },
          headerTintColor: '#fff'
        }}
      >

        <Stack.Screen

          name="(drawer)"
          options={{
            headerShown: false
          }}

        />

        <Stack.Screen
          name="product/[id]"
          options={{
            title: 'Product Detail',
            headerBackTitle: 'Back'
          }}
        />

      </Stack>
    </FavoritesProvider>
  )
}