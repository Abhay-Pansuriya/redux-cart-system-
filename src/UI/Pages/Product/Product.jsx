import React from 'react'
import { Col, Row } from 'reactstrap'
import ProductCard from '../../Components/Card/ProductCard'
import Header from '../../Components/Header/Header'

const Product = () => {
  const data = [1, 12, 14, 185, 15, 18, 1, 441, 91, 51, 61, 51, 61, 61, 71, 851, 71, 51]
  return (
    <div>
      <Header />
      <div className="container">
        <Row className='mb-5'>
          <Col> <h1 className='text-center'> Products </h1> </Col>
        </Row>
        <Row>
          {
            data?.map((d,i) => {
              return <Col className='mb-4' key={d+i}>
                <ProductCard
                  image="https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=9UtTiH5v"
                  title="Tomato"
                  id={d}
                />
              </Col>
            })
          }


        </Row>
      </div>
    </div >
  )
}

export default Product