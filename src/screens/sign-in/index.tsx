import { Image, Text, View } from 'react-native'
import { styles } from './styles'
import { ButtonIcon } from '../../components/ButtonIcon'

import DiscordIcon from './../../assets/discord.png'
import Illustration from './../../assets/illustration.png'

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        source={Illustration}
        alt="Lee Sin, the character from the League of Legends game"
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Easily{`\n`}organize your{`\n`}gaming
        </Text>

        <Text style={styles.subtitle}>
          Create groups and play your favorite{`\n`}games with your friends.
        </Text>

        <ButtonIcon
          icon={DiscordIcon}
          iconAltText="Discord app"
          text="Join with Discord"
          activeOpacity={0.75}
        />
      </View>
    </View>
  )
}
