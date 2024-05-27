import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { Button } from '@/shared/ui/Button'

export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <>
      <Button
        theme="navbarButton"
        onClick={() => {
          navigate(-1)
        }}
      >
        <IoIosArrowBack size={30} />
      </Button>
    </>
  )
}
