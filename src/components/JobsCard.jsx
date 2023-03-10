import React from 'react'
import clock from '../assets/clock.svg'
import { AiFillClockCircle } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
import { useAccount, useAddress } from '@thirdweb-dev/react'

const JobsCard = ({item, handleClick}) => {
  const address = useAddress()
    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
    <div className='shadow-lg cursor-pointer shadow-gray-500 max-w-[330px] min-h-[350px] px-2 py-3' onClick={handleClick}>
        <div className='flex items-center justify-between'>
            <img src={item.image} className='w-9 h-9 rounded-full' />
            <h3 className='text-green-600'>{item.salary}K<span className='text-gray-400 text-[10px]'>/year</span></h3>
        </div>
        <h3 className='text-sm font-ClashDisplay-Bold  mt-3'>{item.skill}</h3>
        <h3 className='text-sm font-ClashDisplay-Regular font-semibold'>{item.companyName}</h3>
        <div className='flex mt-4 items-center justify-between'>
          <div className='flex space-x-2 items-center'>
           <AiFillClockCircle />
          <h4 className='text-xs'>fulltime</h4>
          </div>
          <span className='text-sm font-bold'>{item.category}</span>
          <div className='flex space-x-2 items-center'>
           <ImLocation2 />
          <h4 className='text-xs'>{item.location}</h4>
          </div>
        </div>
        <div className='font-normal text-sm my-6'>{truncate(item.desc, 259)}</div>
        {address !== item.owner ? (
          <button className='bg-green-600 w-full py-4 mt-4'>Apply Now</button>
        ) : (
          
          <button className='bg-green-600 w-full py-4 mt-4'>view details</button>
        )}
    </div>
  )
}

export default JobsCard