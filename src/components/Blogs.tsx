import React from 'react'
import CarouselComponent from './CarouselComponent'
import BlogLoading from './BlogLoading'
import Blog from './Blog'

const Blogs = ({isLoading , products}) => {


  // console.log("products : ",products)
  // console.log(isLoading)
  return (
    <div className='mt-8 p-4 border'>
        <CarouselComponent />
        {isLoading ? <BlogLoading /> : 
          <div>
            <h3 className='text-xl mt-8'>Products :</h3>
            {/* test */}
            <div className='flex flex-row justify-evenly'>
              {products.map(product => 
                  // <>
                    <Blog infos={product} key={product.id} />
                  // </>

              )}
            </div>
          </div>
          }
    </div>
  )
}

export default Blogs