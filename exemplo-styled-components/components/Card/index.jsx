import { CardContainer, Description, Logo } from './styles'

const Card = ({ logo, description }) => {
  return (
    <CardContainer>
      <Logo source={logo} />
      <Description>{description}</Description>
    </CardContainer>
  )
}

export default Card
