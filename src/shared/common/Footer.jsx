import { useNavigate } from 'react-router-dom'
import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import { FaTree } from 'react-icons/fa6'
import { MdApartment } from 'react-icons/md'
import { FaAward } from 'react-icons/fa6'
import { IoPersonSharp } from 'react-icons/io5'
// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { styled, Grid, Button } from '@mui/material';
// import ParkIcon from '@mui/icons-material/Park';
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import PersonIcon from '@mui/icons-material/Person';
// import { GpsFixed } from '@mui/icons-material';

export const Footer = () => {
  const navigate = useNavigate()
  //   const location = useLocation();

  const onClickedIcon = (path) => {
    navigate(path)
  }

  //   const iconColor = path => {
  //     return location.pathname === path ? '#ED3333' : '#989898';
  //   };

  return (
    <>
      <Container theme="footerContainer">
        <Button theme="footerButton">
          <FaTree size={32} />
          <Text theme="semiContent">Home</Text>
        </Button>

        <Button theme="footerButton">
          <MdApartment size={32} />
          <Text theme="semiContent">Charity</Text>
        </Button>
        <Button theme="footerButton">
          <FaAward size={32} />
          <Text theme="semiContent">Badge</Text>
        </Button>
        <button style={{ border: 'none', color: '#ED3333', background: 'transparent', cursor: 'pointer' }} onClick={() => onClickedIcon('/profile')}>
          <IoPersonSharp size={32} />
          <div style={{ color: '#ED3333', fontSize: '14px', padding: '15px 0px' }}>Profile</div>
        </button>
      </Container>
    </>
  )
}
