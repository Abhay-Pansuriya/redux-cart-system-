import React, { useState } from 'react'
import { Delete, Edit, FilePlus } from 'react-feather';
import { Button, Table } from 'reactstrap';
import { useSelector } from 'react-redux';

import Header from '../../Components/Header/Header'
import './admin.scss';
import ProductModal from './ProductModal';
const MainPage = () => {
    const allProducts = useSelector(s => s.productReducer);

    const [modal, setModal] = useState(false);
    const [operation, setOperation] = useState('');
    const [id, setId] = useState();


    const addProduct = () => {
        setModal(true);
        setOperation("Add");
        setId("");
    }
    const editProduct = (id) => {
        setModal(true);
        setOperation("Edit");
        setId(id);
    }
    const deleteProduct = (id) => {
        setModal(true);
        setOperation("Delete");
        setId(id);
    }

    return (
        <div>
            <Header />
            <div className="admin">
                <h1 className='text-center mb-4'> Manage Products </h1>
                <Button color="primary" className='addProduct' onClick={addProduct}>
                    <FilePlus />
                    Add Product
                </Button>

                {
                    allProducts?.products?.length > 0 ?
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Qty</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allProducts?.products?.map((product, index) => {
                                        return <tr key={product?.id}>
                                            <td style={{ width: "100px" }}>{index + 1}</td>
                                            <td style={{ width: "100px" }}><img src={product?.image} width={50} /></td>
                                            <td>{product?.name}</td>
                                            <td>{product?.price}</td>
                                            <td>{product?.category}</td>
                                            <td>{product?.quantity}</td>
                                            <td>
                                                <Edit className='mx-2' onClick={() => { editProduct(product?.id) }} />
                                                <Delete onClick={() => { deleteProduct(product?.id) }} />
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                        :
                        <h2 className='text-center'> No Products Found
                            <strong className='cursor-pointer' onClick={addProduct}> Add Product </strong> to continue
                        </h2>
                }

                <ProductModal
                    modal={modal}
                    setModal={setModal}
                    operation={operation}
                    id={id}
                />
            </div>
        </div>
    )
}

export default MainPage