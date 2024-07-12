import React from 'react'

interface ISearch
{
    placeholder : string
};

const Searchbox : React.FC<ISearch> = ({placeholder}) => {
  return (
    <input className="w-full min-h-[5rem] rounded-[5rem] border-2 border-theme p-4 text-xl text-theme hover:scale-x-[105%] transition-all duration-500" placeholder={placeholder} />
  )
}

export default Searchbox