import { Image, Text, View } from "react-native"

import { s } from "./styles"

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={s.logo} />

      <Text style={s.title}>Welcome!</Text>

      <Text style={s.subtitle}>
        Have advantage coupons to use at  {"\n"}
        your favorite establishments.
      </Text>
    </View>
  )
}