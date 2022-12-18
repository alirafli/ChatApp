// ---
// patch:
//   path: "app/screens/index.ts"
//   append: "export * from \"./HomeScreen\"\n"
//   skip:
// ---
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Screen, Text } from "../components"
import { ChatCard } from "../components/ChatCard"
import { useNavigation } from "@react-navigation/native"
import { chatRoom } from "../data"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `Home: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="Home" component={HomeScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const HomeScreen: FC<StackScreenProps<AppStackScreenProps, "Home">> = observer(
  function HomeScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()
    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll">
        <Text text="home" />
        {chatRoom.map((data) => (
          <ChatCard
            key={data.id}
            image={data.image}
            name={data.name}
            onPress={() => navigation.navigate("ChatRoom" as never, { data } as never)}
          />
        ))}
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: 3,
  marginTop: 40,
}
