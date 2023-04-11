import React from 'react'
import { ApplicantsForm } from '../components'

const Applicant = () => {
  return (
    <div className="w-full h-full  mt-[99px] gap-6 grid items-center">
    <div className="w-full h-full items-center mt-[20%] flex flex-col justify-center">
      <ApplicantsForm />
    </div>
  </div>
  )
}

export default Applicant