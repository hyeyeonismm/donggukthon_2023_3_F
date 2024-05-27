import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import titleFont from '@/assets/fonts/VollkornSCR.ttf'
import lineFont from '@/assets/fonts/RampartOne.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
   font-family: 'titleFont';
   src: local('titleFont'), url(${titleFont}) format('truetype');
   font-weight: normal;
   font-style: normal;
  }

   @font-face {
   font-family: 'lineFont';
   src: local('lineFont'), url(${lineFont}) format('truetype');
   font-weight: normal;
   font-style: normal;
 }
  
  html, body {
    margin: auto;
    padding: 0;
    max-width: 600px;
    height: 100%;
  }
`

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3eee2;
  min-height: 100vh;
  padding: 0px 20px;
`

export const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}
