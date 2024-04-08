import React from 'react'

const SearchDomain = () => {
  return (
    <div className="">
    <section className="py-10 shadow-lg absolute top-[57%] left-[20%] flex-col   justify-center text-center h-60 w-[65%] rounded-lg bg-gray-100 ">
      <h1 className="text-l font-bold mb-10">
        Find the Perfect Domain for your
      </h1>

      <div className=' align-top flex justify-center'>
        <input
          type="text"
          placeholder="Search the Domain"
          className="text-m rounded-l-lg shadow-lg w-[70%] h-14  pl-10 border-none "
        />
        <button className="text-sm shadow-lg  rounded-r-lg h-14 w-44 text-white bg-[#0D5077] hover:scale-105 ">
          Search
        </button>
      </div>
    </section>
  </div>
  )
}

export default SearchDomain