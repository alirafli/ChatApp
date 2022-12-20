// ---
// patch:
//   path: "app/screens/index.ts"
//   append: "export * from \"./ChatRoomScreen\"\n"
//   skip:
// ---
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, ScrollView, Image, ImageStyle, TouchableOpacity } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Screen, Text, TextField } from "../components"
import { BubbleChat } from "../components/BubbleChat"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../models"
// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `ChatRoom: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="ChatRoom" component={ChatRoomScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const ChatRoomScreen: FC<StackScreenProps<AppStackScreenProps, "ChatRoom">> = observer(
  function ChatRoomScreen({ route }) {
    // Pull in one of our MST stores
    const { chatStore, chat } = useStores()
    const data = route.params.data
    const sendIcon = require("../../assets/icons/caretRight.png")
    const [isLoading, setIsLoading] = React.useState(false)

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const handleChat = (text) => {
      chat.setChat(text)
      chat.setName("ali rafli")
    }

    const handleSendChat = (id) => {
      chat.sendChat(id)
    }

    React.useEffect(() => {
      ;(async function load() {
        setIsLoading(true)
        await chatStore.fetchChats(data.id)
        setIsLoading(false)
      })()
    }, [chatStore])
    
    if (isLoading) return <Text style={$root} text="Loading..." />
    return (
      <Screen style={$root} preset="fixed">
        {chatStore.chats.length === 0 ? (
          <Text style={$content} text="belum ada chat" />
        ) : (
          <ScrollView style={$content}>
            {chatStore.chats.map((data, key) => (
              <BubbleChat key={key} name={data.name} message={data.message} />
            ))}
          </ScrollView>
        )}

        <View style={$fieldChat}>
          <TextField
            containerStyle={$textField}
            placeholder="Type Here..."
            onChangeText={(text) => handleChat(text)}
          />
          <TouchableOpacity onPress={() => handleSendChat(data.id)}>
            <Image style={$image} source={sendIcon} />
          </TouchableOpacity>
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $textField: ViewStyle = {
  width: "90%",
}

const $content: ViewStyle = {
  height: "90%",
}

const $image: ImageStyle = {
  borderRadius: 50,
  marginRight: 12,
  width: 45,
  height: 45,
}

const $fieldChat: ViewStyle = {
  paddingHorizontal: 10,
  height: "10%",
  flexDirection: "row",
  alignItems: "center",
  // paddingTop: 15
}
