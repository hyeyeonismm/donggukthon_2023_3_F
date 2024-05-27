import React, { useState } from 'react'
import { Navbar } from '@/shared/common/Navbar'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import { Footer } from '@/shared/common/Footer'
import { ProgressBarWidget } from '@/widgets/progressbar/ProgressBarWidget'
import { DonateWidget } from '@/widgets/modal/DonateWidget'
import bread from '@/assets/images/bread.png'
import mold from '@/assets/images/mold.png'
import fishbread from '@/assets/images/ribbon_fishbread.png'

// 1500원 이하일 때 나타나는 화면
const Case1 = () => {
  return (
    <>
      <div sx={{ margin: '20px 0px' }}>
        <Text>아직 반죽 상태의 붕어빵이예요</Text>
      </div>
      <img src={bread} alt="bread" />
    </>
  )
}

// 3000원 미만일 때 나타나는 화면
const Case2 = () => {
  return (
    <>
      <div sx={{ margin: '20px 0px' }}>
        <Text>붕어빵이 구워지고 있어요!</Text>
      </div>
      <img src={mold} alt="mold" />
    </>
  )
}

// 3000원 이상일 때 나타나는 화면
const Case3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onClickDonate = () => {
    setIsModalOpen(true)
  }
  return (
    <>
      <div sx={{ margin: '20px 0px' }}>
        <Text>
          붕어빵이 완성되었네요!
          <br />
          붕어빵을 선택하면 원하는 재단에 기부 할 수 있어요!
          <br />
          마음을 전달하러 가볼까요?
        </Text>
      </div>
      <Button theme="fishbreadButton" onClick={onClickDonate}>
        <img src={fishbread} alt="fishbread" />
      </Button>
      {<DonateWidget isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

const HomePage = () => {
  let container
  const day = 3
  const totalAmount = 3200
  const formattedTotalAmount = totalAmount.toLocaleString()
  if (totalAmount <= 1500) {
    container = <Case1 />
  } else if (totalAmount < 3000) {
    container = <Case2 />
  } else {
    container = <Case3 />
  }

  return (
    <>
      <Navbar />
      <Container>
        <ProgressBarWidget progress={totalAmount} />
        <Text theme="semiTitle">{day}일차</Text>
        {container}
        <Text theme="semiTitle">{formattedTotalAmount}원</Text>
        <Button theme="default" children="기부 내역 조회" />
      </Container>
      <Footer />
    </>
  )
}

export default HomePage
