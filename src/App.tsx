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

  // body {
  //   position: relative;
  //   min-height: 100vh; /* Garantit que le contenu de la page au-dessus du footer occupe au moins la hauteur de l'écran. */
  //   margin: 0;
  //   padding: 0;
  // }

  return (
    <>
      <div className='m-4 mb-28'>
        <Navbar />
        <Blogs isLoading={isLoading} products={products} />
      </div>
      <Footer />
    </>
  )
}

export default App
