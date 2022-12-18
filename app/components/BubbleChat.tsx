// ---
// patch:
//   path: "app/components/index.ts"
//   append: "export * from \"./BubbleChat\"\n"
//   skip:
// ---
import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../theme"
import { Text } from "./Text"

const defaultImage = require("../../assets/images/rnr-image-1.png")

export interface BubbleChatProps {
  /**
   * An optional style override useful for padding & margin.
   */
  name: string
  message: string
  avatar: string
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const BubbleChat = observer(function BubbleChat({ name, message, avatar }: BubbleChatProps) {
  const profilePicture = avatar ?? defaultImage

  return (
    <View style={$container}>
      <View style={$wrapper}>
        <Image style={$image} source={avatar ? { uri: profilePicture } : profilePicture} />
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
  marginHorizontal: 8,
  borderRadius: 15,
}

const $wrapper: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems:"center",
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

const $image: ImageStyle = {
  borderRadius: 50,
  marginRight: 5,
  width: 25,
  height: 25,
}
