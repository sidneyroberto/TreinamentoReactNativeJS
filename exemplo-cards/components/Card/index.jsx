import { View, Image, Text, StyleSheet } from 'react-native'

const Card = ({ logo, description }) => {
  return (
    <View style={styles.card}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#a537fd',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 20,
  },
  description: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
})

export default Card
