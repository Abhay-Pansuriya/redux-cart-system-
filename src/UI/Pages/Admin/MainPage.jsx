import React, { useState } from 'react'
import { Delete, Edit, FilePlus } from 'react-feather';
import { Button, ButtonDropdown, Col, Row, Table } from 'reactstrap';
import Header from '../../Components/Header/Header'
import './admin.scss';
import ProductModal from './ProductModal';
const MainPage = () => {
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

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Qty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "100px" }}>1</td>
                            <td style={{ width: "100px" }}><img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg" width={50} /></td>
                            <td>Orange</td>
                            <td>Fruit</td>
                            <td>3</td>
                            <td>
                                <Edit className='mx-2' onClick={() => { editProduct() }} />
                                <Delete onClick={() => { deleteProduct() }} />
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><img src="https://live.staticflickr.com/3218/2700323949_591c921968_b.jpg" width={50} /></td>
                            <td>Tomato</td>
                            <td>Vegitable</td>
                            <td>5</td>
                            <td>
                                <Edit className='mx-2' onClick={() => { editProduct() }} />
                                <Delete onClick={() => { deleteProduct() }} />
                            </td>
                        </tr>
                    </tbody>
                </Table>

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