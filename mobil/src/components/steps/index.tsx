import { View, Text } from "react-native"
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native"

import { s } from "./styles"
import { Step } from "../step"

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>See how it works:</Text>

      <Step
        icon={IconMapPin}
        title="Find establishments"
        description="See locations near you that are Nearby partnersy"
      />

      <Step
        icon={IconQrcode}
        title="Activate the coupon with QR Code"
        description="Scan the code at the establishment to use the benefit"
      />

      <Step
        icon={IconTicket}
        title="Get benefits near you"
        description="Activate coupons wherever you are, in different types of establishments"
      />
    </View>
  )
}