import React from 'react'
import styled from 'styled-components'

const ImageStyles = {
  default: {},
  loginImg: {
    zIndex: 1,
  },
}

export const Image = ({ src, width, theme }) => {
  ;(props) => ImageStyles[props.theme]
  return <img src={src} width={width} theme={theme} />
}
