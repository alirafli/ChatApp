// ---
// patch:
//   path: "app/components/index.ts"
//   append: "export * from \"./BubbleChat\"\n"
//   skip:
// ---
import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "../theme"
import { Text } from "./Text"
import { formatDate } from "../utils/formatDate"

export interface BubbleChatProps {
  /**
   * An optional style override useful for padding & margin.
   */
  name: string
  time: string
  message: string
  username: string
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const BubbleChat = observer(function BubbleChat({
  name,
  message,
  username,
  time,
}: BubbleChatProps) {
  const chatTime = formatDate(time,  "HH:mm")
  return (
    <View style={[$container, username === name && $isMe]}>
      <View style={$wrapper}>
        {username !== name && <Text style={$name}>{name}</Text>}
        <Text style={$message}>{message}</Text>
      </View>
      <Text style={$date}>{chatTime}</Text>
    </View>
  )
})

const $wrapper: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  maxWidth: "80%",
  paddingHorizontal: 20,
  paddingVertical: 6,
  marginVertical: 12,
  marginHorizontal: 8,
  borderRadius: 15,
}

const $container: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
}

const $isMe: ViewStyle = {
  justifyContent: "flex-start",
  flexDirection: "row-reverse",
}

const $name: TextStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  fontSize: 12,
  fontWeight: "bold",
  color: colors.palette.primary400,
}

const $message: TextStyle = {
  fontSize: 15,
}

const $date: TextStyle = {
  fontSize: 10,
  marginBottom: 8,
}

// const $image: ImageStyle = {
//   borderRadius: 50,
//   marginRight: 5,
//   width: 25,
//   height: 25,
// }
