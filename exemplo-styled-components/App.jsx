import facebook from './assets/img/facebook.png'
import github from './assets/img/github.png'
import gmail from './assets/img/gmail.png'
import instagram from './assets/img/instagram.png'
import { AppContainer } from './globalStyles'
import Card from './components/Card'

const App = () => {
  return (
    <AppContainer>
      <Card description='Meu perfil no Facebook' logo={facebook} />
      <Card description='Meu perfil no Github' logo={github} />
      <Card description='Meu perfil no Instagram' logo={instagram} />
      <Card description='Meu e-mail no Gmail' logo={gmail} />
    </AppContainer>
  )
}

export default App
