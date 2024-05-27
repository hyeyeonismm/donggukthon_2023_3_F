import { useNavigate } from 'react-router-dom'
import { Container } from '@/shared/ui/Container'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'
import { Navbar } from '@/shared/common/Navbar'
import { Footer } from '@/shared/common/Footer'
import Children from '@/assets/images/children.png'
import Grandparents from '@/assets/images/grandparents.png'
import Refugee from '@/assets/images/refugee.png'
import LowIncome from '@/assets/images/lowIncome.png'

const CharityPage = () => {
  const navigate = useNavigate()
  const charities = [
    { id: 1, name: '어린이', image: Children, path: '/1' },
    { id: 2, name: '독거노인', image: Grandparents, path: '/2' },
    { id: 3, name: '난민', image: Refugee, path: '/3' },
    { id: 4, name: '저소득층', image: LowIncome, path: '/4' },
  ]
  const onClickCharity = (path, name, image) => {
    navigate(`/detail${path}`, {
      state: { name, image, path },
    })
  }

  return (
    <>
      <Navbar />
      <Container>
        <Text theme="title">Charity</Text>
        <Text>
          마음을 나눌 수 있는 단체들 <br /> 단체를 클릭하여 각 단체별 누적 기부 금액을 확인하세요!
        </Text>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', margin: '20px 0px', justifyItems: 'center', alignItems: 'center' }}>
          {charities.map((charity) => (
            <>
              <div>
                <Button theme="charityButton" key={charity.id} onClick={() => onClickCharity(charity.path, charity.name, charity.image)}>
                  <img src={charity.image} alt={charity.name} />
                </Button>
                <Text>{charity.name}</Text>
              </div>
            </>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default CharityPage
