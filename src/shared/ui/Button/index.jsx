import React from 'react'
import styled from 'styled-components'

const ButtonStyles = {
  default: {
    background: '#ED3333 !important',
    color: 'white',
    borderRadius: '12px',
    width: '280px',
    height: '50px',
    margin: '40px 0px',
  },
  navbarButton: {
    marginTop: '30px',
    alignSelf: 'start',
    color: '#757575',
    padding: '0px !important',
  },
  dayButton: {
    background: '#fdfcfb !important',
    borderRadius: '100px',
    padding: '15px 19px !important',
  },
  footerButton: {
    margin: '3px 0px 10px 0px',
    color: '#757575',
  },
  fishbreadButton: {
    margin: '20px 0px',
  },
  modalButton: {
    background: '#fdfcfb !important',
    border: '1px solid #ED3333 !important',
    margin: '10px 5px',
    width: '130px',
    height: '50px',
    padding: '12px 20px',
    color: '#4a453a',
    borderRadius: '16px',
  },
  charityButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.61) !important',
    borderRadius: '10px',
    height: '240px',
    width: '220px',
  },
  badgeButton: {
    borderRadius: '24px',
    border: '1px solid  var(--Blue-0, #EBECFD) !important',
    background: 'var(--Offwhite, #FCFCFC) !important',
    width: '155px',
    height: '155px',
    boxShadow: '0px 1px 4px 0px rgba(110, 116, 134, 0.12)',
  },
  profileButton: {
    margin: '0px 10px',
    borderRadius: '10px',
    width: '97%',
    height: '45px',
    background: '#ED3333 !important',
    color: 'white',
  },
}

const StyledButton = styled.button`
  ${(props) => ButtonStyles[props.theme]}
  cursor: pointer;
  padding: 10px;
  border: none;
  font-size: 16px;
  background-color: transparent;
  &:hover {
    opacity: 80%;
  }
`

export const Button = ({ type, theme, onClick, children }) => {
  return (
    <StyledButton type={type} theme={theme} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
