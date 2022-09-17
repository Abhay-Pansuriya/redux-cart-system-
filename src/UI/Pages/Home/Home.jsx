import React from 'react'
import HomeCard from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import './home.scss'
import cartImg from '../../Images/cartImg.jpg'
import productImg from '../../Images/products.jpg'
import { Button } from 'reactstrap'
import { toast } from "react-toastify";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="container d-flex justify-content-center align-items-center">
        <HomeCard
          title="Collection"
          subTitle="Explore our diffrent products"
          text="You can find various products that match your perfection."
          btn="Explore"
          path="products"
          image={productImg}

        />
        <HomeCard
          title="Cart"
          subTitle="Explore your cart"
          text="Take a look for your selected collection."
          btn="View"
          path="cart"
          image={cartImg}
        />

        <Button color='dark' onClick={() => { toast("Hey 👋, see how easy!"); }}> Toast </Button>
      </div>
      
    </div>
  )
}

export default Home