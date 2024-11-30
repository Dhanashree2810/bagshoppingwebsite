import React from 'react'
import Login from '../pages/login/Login'
import Banner from '@/components/custom/Banner'
import banner1 from '@/assets/images/banner1.jpg'

export default function page() {
  return (
    <div>
      <Banner
        backgroundImage={banner1.src}
        title="Login Account"
        description=""
      />

      <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-56 lg:py-16">
        <Login />
      </div>
    </div>
  )
}
