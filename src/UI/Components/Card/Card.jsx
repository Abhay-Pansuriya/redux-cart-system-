import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const HomeCard = (props) => {
    return (
        <Card style={{ width: '18rem' }} className='mx-5'>
            <img alt="Sample" src={props.image} />
            <CardBody>
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6" > {props.subTitle}</CardSubtitle>
                <CardText>{props.text}</CardText>
                <Button color='dark'><Link to={`/${props.path}`} style={{textDecoration:"none",color:"white"}}>{props.btn}</Link></Button>
            </CardBody>
        </Card>
    )
}

export default HomeCard