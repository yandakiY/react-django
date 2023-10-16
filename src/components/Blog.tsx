import React from 'react'

const Blog = (infos) => {
  return (
    <div className='border p-4'>
      test
      {/* Image */}
      <div className="">
        <img src="" alt="" />
      </div>
      {/* Title */}
      <div>{infos.name} </div>
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
        <button className='p-4 border'>Add</button>
      </div>
    </div>
  )
}

export default Blog