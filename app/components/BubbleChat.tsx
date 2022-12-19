// ---
// patch:
//   path: "app/components/index.ts"
//   append: "export * from \"./BubbleChat\"\n"
//   skip:
// ---
import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../theme"
import { Text } from "./Text"

export interface BubbleChatProps {
  /**
   * An optional style override useful for padding & margin.
   */
  name: string
  message: string
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const BubbleChat = observer(function BubbleChat({ name, message }: BubbleChatProps) {
  return (
    <View style={$container}>
      <View style={$wrapper}>
        <Text style={$name}>{name}</Text>
      </View>
      <Text style={$message}>{message}</Text>
    </View>
  )
})

const $container: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  display: "flex",
  alignSelf: "flex-start",
  maxWidth: "80%",
  paddingLeft: 20,
  paddingRight: 35,
  paddingVertical: 6,
  marginVertical: 12,
  marginHorizontal: 8,
  borderRadius: 15,
}

const $wrapper: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: 5,
}
const $name: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 12,
  fontWeight: "bold",
  color: colors.palette.primary400,
}

const $message: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 15,
}

// const $image: ImageStyle = {
//   borderRadius: 50,
//   marginRight: 5,
//   width: 25,
//   height: 25,
// }
