import React from 'react'
import CustomButton from './CustomButton';

const CompanyDetails = ({item, handleClick}) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  console.log(item)
  return (
    <div className='shadow-lg space-y-5 cursor-pointer shadow-gray-500 max-w-[330px] min-h-[350px] px-2 py-3' onClick={handleClick}>
    <div className='flex items-center justify-between'>
        <img src={item.image} className='w-9 h-9 rounded-full' />
        <span>{item.name}</span>
    </div>
    <div className='flex items-center justify-between'>
      <span>{item.category}</span>
        <span>{item.location}</span>
    </div>
    <div className='flex flex-col items-center'>
    <span className='bg-green-600 px-4 py-2 w-full text-sm font-bold font-ClashDisplay-Regular'>{item.address.slice(0,9)}...{item.address.slice(30,59)}</span>
    <span className='text-sm font-bold font-ClashDisplay-Regular'>{truncate(item.desc, 290)}</span>
    <CustomButton 
    title='View Jobs'
    style='bg-green-600 rounded-lg w-full'
    />
    </div>
</div>
  )
}

export default CompanyDetails