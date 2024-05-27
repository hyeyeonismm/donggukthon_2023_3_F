import styled from 'styled-components'
export const ProgressBarWidget = ({ progress }) => {
  let percentage = 100 / (3000 / progress)
  if (progress >= 3000) {
    percentage = 100
  }
  const formattedProgress = progress.toLocaleString()

  return (
    <>
      <ProgressBar>
        <div style={{ width: `${percentage}%`, backgroundColor: '#ED3333', height: '30px', borderRadius: '30px' }}></div>
      </ProgressBar>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <div style={{ marginLeft: '20px' }}>+{formattedProgress}원</div>
        <div style={{ marginRight: '20px' }}>3,000원</div>
      </div>
    </>
  )
}

const ProgressBar = styled.div`
  display: flex;
  gap: 5px;
  width: 80%;
  background-color: #e0e0e0;
  margin: 20px;
  border-radius: 20px;
`
