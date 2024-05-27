import React, { useState, useEffect } from 'react'
import { Container } from '@/shared/ui/Container'
import { Input } from '@/shared/ui/Input'
import { Text } from '@/shared/ui/Text'
import { Button } from '@/shared/ui/Button'
import { Navbar } from '@/shared/common/Navbar'
import { Footer } from '@/shared/common/Footer'
import { CardWidget } from '@/widgets/card/CardWidget'
import Logo from '@/assets/images/logo.png'

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div style={{ margin: '20px 10px' }}>
        <Text theme="detailContent">로그인 계정</Text>
        <CardWidget theme="profileCard">
          <img src={Logo} alt="logo" style={{ width: '20%' }} />
          <div style={{ margin: '10px 0px' }}>
            <Text>
              <span style={{ fontWeight: 700, fontSize: '20px', marginRight: '5px' }}>김혜연</span>님<br />
              tester@naver.com
            </Text>
          </div>
        </CardWidget>
      </div>
      <div style={{ margin: '20px 10px' }}>
        <Text theme="detailContent">계좌 정보 수정</Text>
        <CardWidget theme="profileCard">
          <div style={{ margin: '10px 0px 30px 0px' }}>
            <Text>예금주명</Text>
            <input style={{ width: '450px', height: '30px', borderRadius: '10px', border: '1px solid #ddd', padding: '5px 10px', margin: '0px 10px' }} type="text" disabled value="김혜연"></input>

            <Text>은행명</Text>
            <input style={{ width: '450px', height: '30px', borderRadius: '10px', border: '1px solid #ddd', padding: '5px 10px', margin: '0px 10px' }} type="text" disabled value="카카오뱅크"></input>

            <Text>계좌번호</Text>
            <input
              style={{ width: '450px', height: '30px', borderRadius: '10px', border: '1px solid #ddd', padding: '5px 10px', margin: '0px 10px' }}
              type="text"
              disabled
              value="3333-04-123852"
            ></input>
          </div>
        </CardWidget>
      </div>
      <div style={{ margin: '20px 10px' }}>
        <Text theme="detailContent">기부 정보 수정</Text>
        <CardWidget theme="profileCard">
          <div style={{ margin: '10px 0px 30px 0px' }}>
            <Text>기부 요일</Text>
            <input style={{ width: '450px', height: '30px', borderRadius: '10px', border: '1px solid #ddd', padding: '5px 10px', margin: '0px 10px' }} type="text" disabled value="월, 수, 금"></input>
            <Text>기부 내역 조회</Text>

            <Button theme="profileButton" children="기부 내역 조회하기" />
          </div>
        </CardWidget>
      </div>

      <Footer />
    </>
  )
}
export default ProfilePage
