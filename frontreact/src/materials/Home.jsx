import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Facility from '../components/Facility'
import Catagorey from '../components/Catagorey'
import Products from '../components/Products'
import Updation from '../components/Updation'
import Footer from '../components/Footer'
  

const Home = () => {
  return (
  <div>
  <Navbar/>
  <Slide/>
 <Facility/>
<Catagorey/>
<Products/>
<Updation/>
<Footer/>


   </div>
  )
}

export default Home