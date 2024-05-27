import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'

export const BadgeWidget = ({ name, image, onClick, description }) => {
  return (
    <>
      <Button theme="badgeButton" onClick={onClick}>
        <img src={image} alt={name} style={{ width: '80%' }} />
        <Text theme="semiContent">{name}</Text>
      </Button>
    </>
  )
}
