import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const ProductCard = ({ image, title, id }) => {
    return (
        <Card style={{ width: '18rem' }} className='mx-5'>
            <img alt="Sample" src={image} />
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <div className='d-flex justify-content-between align-items-center'>
                    <Button color='dark' ><Link to={`/products/${id}`} style={{ textDecoration: "none", color: "white" }}>View</Link></Button>
                    <Button color='primary'>Add To Cart</Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default ProductCard