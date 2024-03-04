import {
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageProps,
  TouchableOpacityProps,
} from 'react-native'

import { styles } from './styles'

interface ButtonIconProps extends TouchableOpacityProps {
  icon: ImageProps
  iconAltText: string
  text: string
}

export function ButtonIcon({
  icon,
  iconAltText,
  text,
  ...rest // TouchableOpacityProps
}: ButtonIconProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconContainer}>
        <Image source={icon} alt={iconAltText} style={styles.icon} />
      </View>

      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  )
}
