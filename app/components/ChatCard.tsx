// ---
// patch:
//   path: "app/components/index.ts"
//   append: "export * from \"./ChatCard\"\n"
//   skip:
// ---
import * as React from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../theme"
import { Text } from "./Text"
import { formatDate } from "../utils/formatDate"

const defaultImage = require("../../assets/images/rnr-image-1.png")

export interface ChatCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  image?: string
  name: string
  onPress?: () => void
  createdAt: string
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ChatCard = observer(function ChatCard({
  name = "your title",
  image,
  onPress,
  createdAt,
}: ChatCardProps) {
  const profilePicture = image ?? defaultImage
const dateToTime = formatDate(createdAt)
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={$container}>
        <Image style={$image} source={image ? { uri: profilePicture } : profilePicture} />
        <View style={$textWrapper}>
          <Text style={$title}>{name}</Text>
          <Text style={$date}>{dateToTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
})

const $container: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: 20,
  paddingVertical: 15,
}

const $textWrapper: ViewStyle = {
  flex: 1,
  marginTop: 12,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}

const $title: TextStyle = {
  fontFamily: typography.secondary.medium,
  fontSize: 14,
  color: colors.palette.secondary500,
}

const $date: TextStyle = {
  fontFamily: typography.secondary.medium,
  fontSize: 11,
  color: colors.palette.overlay20,
}

const $image: ImageStyle = {
  marginTop: spacing.small,
  borderRadius: 50,
  marginRight: 12,
  width: 45,
  height: 45,
}
