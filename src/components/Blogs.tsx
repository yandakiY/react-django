import React from 'react'
import CarouselComponent from './CarouselComponent'
import BlogLoading from './BlogLoading'
import Blog from './Blog'

const Blogs = ({isLoading , products}) => {


  console.log("products : ",products)
  // console.log(isLoading)
  return (
    <div className='mt-8 p-4 border'>
        <CarouselComponent />
        {isLoading ? <BlogLoading /> : 
          <div className='h-fit'>
            <h3 className='text-xl mt-2'>Products :</h3>
            {/* test */}
            <div className='grid gap-4 grid-cols-3'>
              {products.map(product =>
                    <>
                      <Blog infos={product} key={product.id} />
                      <Blog infos={product} key={product.id} />
                    </>
              )}
            </div>
          </div>
          }
    </div>
  )
}

export default Blogs