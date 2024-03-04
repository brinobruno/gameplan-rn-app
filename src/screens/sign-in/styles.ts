import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1, // takes whole screen / flex display by default
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary100,
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 40,
    lineHeight: 40,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    marginBottom: 64,
  },
})
