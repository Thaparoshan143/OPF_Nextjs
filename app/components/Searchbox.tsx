import React from 'react'

interface ISearch
{
    placeholder : string
};

const Searchbox : React.FC<ISearch> = ({placeholder}) => 
{
  return (
    <input className="w-full min-h-[5rem] rounded-[5rem] border-2 p-4 text-xl text-theme active:border-2 active:border-theme transition-all duration-200" placeholder={placeholder} />
  )
}

export default Searchbox