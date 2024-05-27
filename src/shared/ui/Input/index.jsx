import styled from 'styled-components'

const StyledProps = styled.div`
  ${(props) => props.theme.div}
`
const StyledInput = styled.input`
  ${(props) => props.theme.input}
`
const StyledLabel = styled.label`
  ${(props) => props.theme.label}
`
const StyledSelect = styled.select`
  width: 81.6%;
  height: 45px;
  background-color: #fdfcfb;
  border-radius: 10px;
  padding: 0px 15px;
  border: none;
  appearance: none;
  cursor: pointer;
`

export const Input = (props) => {
  const { label, input, type } = props
  return (
    <StyledProps>
      <StyledLabel htmlFor={input.id} id={input.id}>
        {label}
      </StyledLabel>
      {type === 'select' ? (
        <StyledSelect {...input}>
          {input.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      ) : (
        <StyledInput {...input} />
      )}
    </StyledProps>
  )
}
