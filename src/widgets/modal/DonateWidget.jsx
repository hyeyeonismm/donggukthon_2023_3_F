import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'

export const DonateWidget = ({ isOpen, onClose }) => {
  const onClickBackground = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  return (
    <>
      {isOpen && (
        <div
          onClick={onClickBackground}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Container theme="modalContainer" style={{ backgroundColor: 'white', padding: '20px' }}>
            <div style={{ fontWeight: 700, color: '#4a453a', fontSize: '22px', marginBottom: '15px' }}>단체를 선택해주세요</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0px 20px' }}>
              <Button theme="modalButton" children="어린이" />
              <Button theme="modalButton" children="독거노인" />
              <Button theme="modalButton" children="난민" />
              <Button theme="modalButton" children="저소득층" />
            </div>
          </Container>
        </div>
      )}
    </>
  )
}
