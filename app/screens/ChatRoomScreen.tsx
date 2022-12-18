// ---
// patch:
//   path: "app/screens/index.ts"
//   append: "export * from \"./ChatRoomScreen\"\n"
//   skip:
// ---
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Screen, Text } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `ChatRoom: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="ChatRoom" component={ChatRoomScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const ChatRoomScreen: FC<StackScreenProps<AppStackScreenProps, "ChatRoom">> = observer(
  function ChatRoomScreen({route}) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()
    const data = route.params.data
    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll">
        <Text text={data.name} />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: 3,
  marginTop: 40,
}
