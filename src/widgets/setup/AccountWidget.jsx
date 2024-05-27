import styled, { ThemeProvider } from 'styled-components'
import { setupTheme } from '@/shared/ui/Input/theme'
import { Input } from '@/shared/ui/Input'

const AccountWidget = () => {
  const accountOrg = [
    { value: '국민은행', label: '국민은행' },
    { value: '신한은행', label: '신한은행' },
    { value: '하나은행', label: '하나은행' },
    { value: '우리은행', label: '우리은행' },
    { value: '농협은행', label: '농협은행' },
    { value: '카카오은행', label: '카카오은행' },
  ]
  return (
    <>
      <ThemeProvider theme={setupTheme}>
        <Input label="예금주명" input={{ id: 'userName', type: 'text', placeholder: '예금주명을 입력하세요' }} />
        <Input label="은행 선택" input={{ id: 'bankSelect', options: accountOrg }} type="select" />
        <Input label="계좌번호" input={{ id: 'accountNum', type: 'text', placeholder: '계좌번호를 입력하세요' }} />
        {/* <Input label="계좌 확인" input={{ id: 'userName', type: 'text' }} /> */}
      </ThemeProvider>
    </>
  )
}
export default AccountWidget

const Select = styled.select`
  margin: 15px;
  width: 75%;
  align-self: center;
  height: 45px;
  border: none;
  padding: 15px;
  border-radius: 10px;
`

// export const setupTheme = {
//   div: `display: flex;
//   flex-direction:column;
//   gap:5px;
//   margin:15px;
//   align-items: center;
//   `,
//   input: `
//   width: 75%;
//   height: 45px;
//   background-color: #fdfcfb;
//   border-radius: 10px;
//   padding:0px 15px;
//   border: none;
//   `,
//   label: `
//   align-self:start;
//   padding-left: 11%;
//   `,
// }
