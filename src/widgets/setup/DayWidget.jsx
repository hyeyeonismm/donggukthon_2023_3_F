import { useNavigate } from 'react-router-dom'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'

const DayWidget = () => {
  const navigate = useNavigate()
  const days = ['월', '화', '수', '목', '금', '토', '일']
  const rows = [1, 2, 4]
  let currentIndex = 0

  return (
    <>
      <Container>
        <Text>
          기부 요일을 선택해주세요.
          <br />
          선택하신 요일 22시가 되면,
          <br /> 1,000원 미만의 자투리 금액이 기부됩니다.
        </Text>
        <form
          onSubmit={() => {
            navigate('/home')
          }}
        >
          <Container theme="treeContainer">
            {rows.map((row, rowIndex) => {
              const daySlice = days.slice(currentIndex, currentIndex + row)
              currentIndex += row
              return (
                <div key={rowIndex} style={{ display: 'flex', gap: '20px', margin: '10px' }}>
                  {daySlice.map((day, dayIndex) => (
                    <Button key={dayIndex} theme="dayButton">
                      {day}
                    </Button>
                  ))}
                </div>
              )
            })}
          </Container>
          <Button type="submit" theme="default" children="시작하기" />
        </form>
      </Container>
    </>
  )
}
export default DayWidget
