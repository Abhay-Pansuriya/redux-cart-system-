import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDesc = () => {
    const params = useParams();

  return (
    <div>ProductDesc - {params?.id}</div>
  )
}

export default ProductDesc