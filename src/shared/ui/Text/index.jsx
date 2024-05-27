import React from 'react'
import styled from 'styled-components'

const TextStyles = {
  logo: {
    fontFamily: 'lineFont',
    fontSize: '26px',
    fontWeight: 700,
    color: 'black !important',
  },
  carousel: {
    height: '150px',
  },
  title: {
    marginTop: '15px',
    fontFamily: 'titleFont',
    fontSize: '26px',
    fontWeight: 700,
    color: 'black !important',
  },
  semiTitle: {
    fontSize: '28px',
    fontWeight: 700,
  },
  detailContent: {
    fontWeight: 700,
    fontSize: '20px',
    margin: '10px 0px',
    padding: '0px 10px !important',
  },
  semiContent: {
    fontSize: '14px',
    padding: '10px 0px !important',
    color: '#757575 !important',
  },
}

const StyledText = styled.div`
  ${(props) => TextStyles[props.theme]}
  color: #4a453a;
  padding: 15px 10px;
  line-height: 1.5;
`

export const Text = ({ theme, children }) => {
  return <StyledText theme={theme}>{children}</StyledText>
}
