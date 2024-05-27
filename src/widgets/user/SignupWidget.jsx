import { useNavigate } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { userTheme } from '@/shared/ui/Input/theme'
import { Input } from '@/shared/ui/Input'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'

export const SignupWidget = () => {
  const navigate = useNavigate()
  return (
    <>
      <form
        onSubmit={() => {
          navigate('/setup')
        }}
      >
        <Text theme="title">Create Your Account!</Text>
        <ThemeProvider theme={userTheme}>
          <Input label="이름" input={{ id: 'name', type: 'text' }} />
          <Input label="이메일" input={{ id: 'id', type: 'email' }} />
          <Input label="패스워드" input={{ id: 'password', type: 'password' }} />
        </ThemeProvider>
        <Button type="submit" theme="default" children="회원가입" />
      </form>
    </>
  )
}
export default SignupWidget

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
