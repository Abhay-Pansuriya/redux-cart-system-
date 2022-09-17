import React from 'react'
import { Button, Col, Row } from 'reactstrap';
import Header from '../../Components/Header/Header'
import './cart.scss';
const Cart = () => {
  const data = [1, 2, 3, 4, 5, 6]
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='header mb-5 d-flex justify-content-between '>
          <h1 > Your Cart </h1>
          <div className="total">
            <p> Total : $500 </p>
            <Button color='primary'> Checkout </Button>
          </div>
        </div>
        <Row className="cart justify-content-center">
          {
            data?.map(i =>
              <Col md={6} key={i} className="cartData">
                <div className="img">
                  <img src="https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=9UtTiH5v" width={150} />
                </div>
                <div className="otherInfo">
                  <div className="first">
                    <p className="title"> Tomato </p>
                    <p className='price title'>Price : $70</p>
                  </div>
                  <div className="second">
                    <p className='price title'>Subtotal : $70</p>
                    <div className="qty">
                      Quantity : <input type="number" min="0" name='qty' className='qtyBox' />
                    </div>
                  </div>
                </div>
              </Col>
            )
          }
        </Row>


      </div>
    </div>
  )
}

export default Cart