import { useNavigate } from 'react-router-dom'
import { Container } from '@/shared/ui/Container'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'
import { CarouselWidget } from '@/widgets/carousel/CarouselWidget'
import Main from '@/assets/images/present.png'

const OnboardingPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <Container theme="default">
        <div style={{ marginTop: '50px' }}></div>
        <img src={Main} alt="main" width="200px" />
        <Text theme="logo">
          Create Bread <br />
          and Donate!
        </Text>
        <CarouselWidget />
        <Button
          type="button"
          onClick={() => {
            navigate('/user')
          }}
          theme="default"
          children="시작하기"
        />
      </Container>
    </>
  )
}

export default OnboardingPage
