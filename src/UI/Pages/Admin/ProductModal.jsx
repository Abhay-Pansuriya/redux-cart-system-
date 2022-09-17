import React, { useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const ProductModal = ({ modal, setModal, operation, id }) => {

    const [productName, setProductName] = useState();
    const [category, setCategory] = useState();
    const [quantity, setQuantity] = useState();
    const [image, setImage] = useState();



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
                                        <Input type="text" name="productName" id="productName" placeholder="Enter Product Name" onChange={e => { setProductName(e.target.value) }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label >Enter Product Category</Label>
                                        <Input type="text" name="category" placeholder="i.e fruit" onChange={e => { setCategory(e.target.value) }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label >Enter Product Quantity</Label>
                                        <Input type="number" name="qty" placeholder="i.e : 4" onChange={e => { setQuantity(e.target.value) }} />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>Image</Label>
                                        <Input type="file" name="file" onChange={e => { setImage(e.target.value) }} />
                                        <FormText color="muted"> Select an image for the product </FormText>
                                    </FormGroup>
                                </Form>
                            </ModalBody>

                    }
                    <ModalFooter>
                        <Button color="primary" className='operation'> {operation} </Button>
                        <Button color="danger" onClick={() => setModal(false)}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default ProductModal