import { useNavigate } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { userTheme } from '@/shared/ui/Input/theme'
import { Input } from '@/shared/ui/Input'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'

const LoginWidget = ({ setPresentValue }) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/setup')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Text theme="title">Sign Your Account!</Text>
        <ThemeProvider theme={userTheme}>
          <Input label="이메일" input={{ id: 'id', type: 'email' }} />
          <Input label="패스워드" input={{ id: 'password', type: 'password' }} />
        </ThemeProvider>
        <Container theme="dontHaveId">
          <Text theme="semiContent">계정이 없으신가요?</Text>
          <StyledButton
            onClick={() => {
              setPresentValue('signup')
            }}
          >
            회원가입
          </StyledButton>
        </Container>
        <Button type="submit" theme="default" children="로그인" />
      </form>
    </>
  )
}
export default LoginWidget

const StyledButton = styled.button`
  color: #b87514;
  font-size: 14px;
  background-color: transparent;
  border: none;
  padding: 0;
  height: 17px;
  border-bottom: 1px solid #b87514;
  cursor: pointer;

  &:hover {
    opacity: 50%;
  }
`
