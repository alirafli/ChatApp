// ---
// patch:
//   path: "app/screens/index.ts"
//   append: "export * from \"./CreateChatRoomScreen\"\n"
//   skip:
// ---
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Button, Screen, TextField } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `CreateChatRoom: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="CreateChatRoom" component={CreateChatRoomScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const CreateChatRoomScreen: FC<StackScreenProps<AppStackScreenProps, "CreateChatRoom">> =
  observer(function CreateChatRoomScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="fixed">
        <TextField containerStyle={$field} label="group name" placeholder="Type Here..." />
        <Button onPress={() => console.log("klicked")}>create group</Button>
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
  paddingTop: 10,
  paddingHorizontal: 20,
}

const $field: ViewStyle = {
  marginBottom: 70,
}
