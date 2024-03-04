import { Button, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'

export default function SignIn() {
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>

      <TextInput
        style={styles.input}
        onChangeText={setText}
      />

      <Button  title='click' onPress={() => setCount((prevState) => prevState + 1)}/>

      <Text>{count}</Text>

      <Text>
        You typed: {text}
      </Text>
    </View>
  )
}