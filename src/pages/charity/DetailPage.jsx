import { useNavigate, useLocation } from 'react-router-dom'
import { Container } from '@/shared/ui/Container'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'
import { Navbar } from '@/shared/common/Navbar'
import { Footer } from '@/shared/common/Footer'
import Building from '@/assets/images/building.png'

const DetailPage = () => {
  const location = useLocation()
  const { name, image, path } = location.state
  const fishbreadAmount = 129

  let charityDetail

  // 단체 세부사항
  if (name === '어린이') {
    charityDetail = '위스타트'
  } else if (name === '난민') {
    charityDetail = '유엔 난민 기부'
  } else if (name === '저소득층') {
    charityDetail = '희망 조약돌'
  } else {
    charityDetail = '독거노인 종합지원센터'
  }

  return (
    <>
      <Navbar />
      <Container>
        <Text theme="title">{name}</Text>
        <div style={{ margin: '10px 0px' }}>
          <img width={120} alt="단체이미지" src={image} />
        </div>
        <Text theme="detailContent">
          {charityDetail} 단체에 총 {fishbreadAmount}마리의
          <br /> 붕어빵이 기부되었어요!
        </Text>
        <Text>
          모금된 붕어빵은 여러분의 이름으로
          <br /> {charityDetail} 단체에 기부됩니다
          <br />
          연말동안 여러분의 따뜻한 마음을 전달해보세요!
        </Text>
        <img alt="building" src={Building} />
      </Container>
      <Footer />
    </>
  )
}

export default DetailPage
