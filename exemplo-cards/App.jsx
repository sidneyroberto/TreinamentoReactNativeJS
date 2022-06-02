import { View, StyleSheet } from 'react-native'

import Card from './components/Card'
import facebook from './assets/img/facebook.png'
import instagram from './assets/img/instagram.png'
import gmail from './assets/img/gmail.png'
import github from './assets/img/github.png'

const App = () => {
  return (
    <View style={styles.container}>
      <Card description='Meu perfil no Facebook' logo={facebook} />
      <Card description='Meu perfil no Instagram' logo={instagram} />
      <Card description='Meu e-mail no Gmail' logo={gmail} />
      <Card description='Meu perfil no Github' logo={github} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default App
