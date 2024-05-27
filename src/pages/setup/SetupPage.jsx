import React, { useState, useEffect } from 'react'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import { Navbar } from '@/shared/common/Navbar'
import { AccountWidget, DayWidget } from '@/widgets/setup'

const SetupPage = () => {
  const [currentStep, setCurrentStep] = useState('accountWidget')
  return (
    <>
      <Navbar />
      <Container theme="setupContainer">
        <Text theme="title">
          Share Your Warmth <br />
          With Our App
        </Text>
      </Container>
      {currentStep === 'accountWidget' && (
        <>
          <AccountWidget />
          <Container>
            <Button type="button" theme="default" children="다음" onClick={() => setCurrentStep('dayWidget')} />
          </Container>
        </>
      )}
      {currentStep === 'dayWidget' && (
        <>
          <DayWidget />
        </>
      )}
    </>
  )
}
export default SetupPage
