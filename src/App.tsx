import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import BlogLoading from './components/BlogLoading'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [isLoading, setLoading] = useState(true)
  const [products , setProducts] = useState(null)

  // console.log("products" , products)
  useEffect(() => {
      fetch('http://127.0.0.1:8000/api_ecom/')
        .then(data => data.json())
        .then(product => {
            setLoading(false) // L'api a été chargé
            // console.log(product)
            setProducts(product) // update of product state
        })
        .catch(err => {
          console.error(err)
        })
  },[setProducts])

  return (
    <>
      <div className='h-screen m-6 flex flex-col'>
        <Navbar />
        <Blogs isLoading={isLoading} products={products} />
      </div>
      <Footer />
    </>
  )
}

export default App
