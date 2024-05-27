import { useNavigate } from 'react-router-dom'
import { Container } from '@/shared/ui/Container'
import { Text } from '@/shared/ui/Text'
import { Navbar } from '@/shared/common/Navbar'
import { Footer } from '@/shared/common/Footer'
import { BadgeWidget } from '@/widgets/badge/BadgeWidget'
import { badges } from '@/assets/images/badge'

const MyPage = () => {
  const onClickBadge = (name, image, description) => {
    // 추후 작성
  }

  return (
    <>
      <Navbar />
      <Container>
        <Text theme="title">Badge</Text>
        <Text>
          지금까지 기부한 붕어빵을 통해 획득한 뱃지예요! <br /> 뱃지를 클릭하면 상세한 설명을 확인할 수 있어요
          <br />
          앞으로 또 어떤 붕어빵을 획득할 수 있을까요?
        </Text>
        <Container theme="badgeContainer">
          {badges.map((badge) => (
            <BadgeWidget key={badge.id} name={badge.name} image={badge.image} onClick={() => onClickBadge(badge.name, badge.image, badge.description)} description={badge.description} />
          ))}
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default MyPage
