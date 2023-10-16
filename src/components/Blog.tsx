import React from 'react'

const Blog = ({infos}) => {
  return (
    <div className='w-5/6 lg:w-3/6 border p-4'>
      
      {/* Image */}
      <div className="">
        <img src="https://source.unsplash.com/random" alt="" className='h-40 w-48 rounded' />
      </div>
      {/* Title */}
      <div>{infos.name}</div>
      {/* Description */}
      <div>{infos.description} </div>
      {/* Price  */}
      <div className='flex flex-row gap-4'>
        <div className="">
          {infos.price}
        </div>
        <div className="">
          {infos.status == 1 ? "Active" : "Inactive"}
        </div>
      </div>
      {/* Button "Add" */}
      <div>
        <button className='p-1 border rounded bg-slate-50 text-black bold w-28'>Add</button>
      </div>
    </div>
  )
}

export default Blog