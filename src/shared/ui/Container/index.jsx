import React from 'react'
import { BiBorderRadius } from 'react-icons/bi'
import styled from 'styled-components'

const ContainerStyles = {
  carouselContainer: {
    lineHeight: 1.5,
    backgroundColor: '#fdfcfb !important',
  },
  dontHaveId: {
    textAlign: 'right !important',
    alignItems: 'flex-end !important',
    marginRight: '5vw !important',
    backgroundColor: '#fdfcfb !important',
  },
  setupContainer: {
    marginBottom: '20px',
  },
  treeContainer: {
    margin: '20px 0px',
  },
  footerContainer: {
    flexDirection: 'row !important',
    justifyContent: 'space-evenly !important',
    padding: '10px 0px',
    width: '100%',
  },
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '420px',
    height: '25%',
    overflowX: 'hidden',
    overflowY: 'auto',
    backgroundColor: '#fdfcfb !important',
    borderRadius: '30px',
    boxShadow: '0 10px 40px rgb(80,80,80)',
    padding: '10px 20px 10px 20px',
  },
  badgeContainer: {
    display: 'grid !important',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: '30px',
    margin: '40px 0px',
  },
}

const StyledContainer = styled.div`
  ${(props) => ContainerStyles[props.theme]}
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #f3eee2;
`

export const Container = ({ theme, children }) => {
  return <StyledContainer theme={theme}>{children}</StyledContainer>
}
