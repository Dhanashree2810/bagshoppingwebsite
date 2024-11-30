import React from 'react'
import Registration from '../pages/register/Registration'
import banner1 from '@/assets/images/banner1.jpg'
import Banner from '@/components/custom/Banner'

export default function page() {
  return (
    <div>
      <Banner
        backgroundImage={banner1.src}
        title="Create Account"
        description=""
      />
      <div className="w-full px-4 py-5 sm:px-8 sm:py-10 lg:px-56 lg:py-12">
        <Registration />
      </div>
    </div>
  )
}
