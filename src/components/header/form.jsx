import React from 'react'
import { CiSearch } from 'react-icons/ci';

const Form = () => {
  return (
    <form className='flex items-center border rounded-md'>
      <input type='text' className='rounded-l-md bg-transparent p-1 px-2 md:px-5 outline-none' placeholder='Ülke Ara ...'/>
      <button className='bg-green-500 p-[6px] text-xl w-full h-full rounded-r-md transition hover:bg-green-600'>
        <CiSearch/>
      </button>
    </form>
  )
}

export default Form;
