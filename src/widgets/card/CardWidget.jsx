import styled from 'styled-components'

const CardStyles = {
  userCard: {
    background: '#fdfcfb',
    borderRadius: '30px',
    padding: '10px 20px',
    width: '78%',
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.3)',
    margin: '40px 0px',
  },
  profileCard: {
    background: '#fdfcfb',
    borderRadius: '30px',
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
}

const StyledCard = styled.div`
  ${(props) => CardStyles[props.theme]}
  background-color: '#fdfcfb';
  border-radius: '30px';
  padding: '10px 20px';
`

export const CardWidget = ({ theme, children }) => {
  return (
    <>
      <StyledCard theme={theme}>{children}</StyledCard>
    </>
  )
}
