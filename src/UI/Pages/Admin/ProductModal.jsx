import React, { useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../../Redux/Actions/Action';
import uniqid from 'uniqid';
import { toast } from 'react-toastify';
const ProductModal = ({ modal, setModal, operation, id }) => {

    const dispatch = useDispatch();
    const allProducts = useSelector(s => s.productReducer);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [quantity, setQuantity] = useState();
    const [image, setImage] = useState();

    const ClearForm = () => {
        setName('')
        setCategory('')
        setQuantity('')
        setPrice('')
        setImage('')
        setModal(false);
    }

    const onSubmit = () => {
        if (operation === "Add") {
            const data = [...allProducts.products, {
                id: uniqid(),
                name,
                price,
                category,
                quantity,
                image
            }]
            if (dispatch(addProduct(data))) {
                toast.success("Product added");
                ClearForm();
            }
        }
    }

    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = "";
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = reader.result;
                setImage(baseURL);
                resolve(baseURL)
            };
        });
    };



    return (
        <div>
            <div>
                <Modal isOpen={modal} toggle={() => { setModal(!modal) }} className="Modal">
                    <ModalHeader toggle={() => { setModal(!modal) }}>{operation} Product</ModalHeader>
                    {
                        operation === "Delete" ?
                            <ModalBody>
                                Are you sure want to delete ?
                            </ModalBody>
                            :
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <Label >Product Name</Label>
                                        <Input value={name} type="text" name="productName" id="productName" placeholder="Enter Product Name" onChange={e => { setName(e.target.value) }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label >Product Price</Label>
                                        <Input value={price} type="number" name="productPrice" placeholder="120" onChange={e => { setPrice(e.target.value) }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label >Enter Product Category</Label>
                                        <Input value={category} type="text" name="category" placeholder="i.e fruit" onChange={e => { setCategory(e.target.value) }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label >Enter Product Quantity</Label>
                                        <Input value={quantity} type="number" name="qty" placeholder="i.e : 4" onChange={e => { setQuantity(e.target.value) }} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>Image</Label>
                                        <Input type="file" name="file" onChange={e => { getBase64(e.target.files[0]) }} />
                                        <FormText color="muted"> Select an image for the product </FormText>
                                    </FormGroup>
                                </Form>
                            </ModalBody>

                    }
                    <ModalFooter>
                        <Button color="primary" className='operation' onClick={onSubmit}> {operation} </Button>
                        <Button color="danger" onClick={() => { ClearForm(); }}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div >
    )
}

export default ProductModal