import Carousel from 'react-material-ui-carousel'
import { Text } from '@/shared/ui/Text'
import { Container } from '../../shared/ui/Container'
import { CardWidget } from '@/widgets/card/CardWidget'

export const CarouselWidget = () => {
  return (
    <>
      <CardWidget theme="userCard">
        <Container theme="carouselContainer">
          <Carousel autoPlay={false} animation="slide" navButtonsAlwaysVisible={true} sx={{ width: '127%' }}>
            <Text theme="carousel">
              기부가 하고 싶은데 방법을 모르겠고,
              <br />
              기부를 하는 과정이 너무 번거로우셨나요? <br />
              <br />
              '사랑의 붕어빵'을 통해 <br /> 여러분의 마음을 <br />
              쉽고 간단하게 전달해보세요!
            </Text>
            <Text theme="carousel">
              Q. '사랑의 붕어빵'은 어떤 서비스인가요? <br />
              <br />
              기부 금액이 쌓임에 따라 붕어빵이 만들어집니다. <br />
              3,000원이 쌓이면 붕어빵이 완성되고, <br />
              단체를 선택하여 기부할 수 있습니다.
            </Text>
            <Text theme="carousel">
              Q. '사랑의 붕어빵'의 특징은 무엇인가요?
              <br />
              <br />
              기부를 할 때마다 랜덤의 붕어빵이 만들어집니다. <br />
              모금 금액에 따라 붕어빵이 점점 성장하고, <br />
              붕어빵을 기부하여 뱃지를 획득할 수 있습니다.
            </Text>
            <Text theme="carousel">
              Q. 꼭 3,000원을 모아야 기부가 가능한가요?
              <br />
              <br />
              아닙니다. <br />
              기부는 금액에 상관없이 가능합니다.
              <br />
              그러나 3,000원이 모여야 <br />
              뱃지 획득이 가능한 점을 기억해주세요!
            </Text>
            <Text theme="carousel">
              Q. 구체적인 기부 방식은 어떻게 되나요?
              <br />
              <br />
              여러분이 선택한 요일 22시에 등록 계좌의 <br />
              1,000원 이하 자투리 금액이 자동으로 입금됩니다.
            </Text>
            <Text theme="carousel">
              Q. 어떤 단체에 기부가 되나요?
              <br />
              <br />
              난민, 독거 노인, 저소득층, 어린이 중<br />
              직접 선택 가능합니다.
              <br />
              여러분의 마음을 전달하고
              <br />
              아기자기한 붕어빵을 모아보세요!
            </Text>
          </Carousel>
        </Container>
      </CardWidget>
    </>
  )
}
